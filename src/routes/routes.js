const express = require("express");
const puppeteer = require("puppeteer");

const router = express.Router();

router.get("/getPosts", async (req, res) => {
  let { profile } = req.query;

  if (!profile) {
    return res
      .status(400)
      .send({ error: "Profile URL or username is required" });
  }

  profile = String(profile);

  const username = profile.includes("instagram.com")
    ? profile
        .split("/")
        .filter(
          (ele) => ele && !ele.includes("instagram") && !ele.includes("?")
        )[0]
    : profile;

  console.log(username);

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://www.instagram.com/${username}/`);

    await page.waitForSelector("article");

    const posts = await page.evaluate(() => {
      const postElements = document.querySelectorAll("article > div img");
      const postUrls = Array.from(postElements).map((el) => el.src);
      return postUrls;
    });

    console.log(posts);
    await browser.close();

    return res.send({ posts });
  } catch (err) {
    return res
      .status(500)
      .send({ error: "An error occured while fetching posts" });
  }
});

module.exports = router;
