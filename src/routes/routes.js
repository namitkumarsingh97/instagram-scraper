const express = require("express");
const puppeteer = require("puppeteer");

const router = express.Router();

router.post("/getPosts", async (req, res) => {
  let { profile } = req.body;

  if (!profile) {
    return res
      .status(400)
      .send({ error: "Profile URL or username is required" });
  }

  // Ensure profile is a string
  profile = String(profile);

  //   Extract username from profile URL if a URL is provided
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

    // Navigate to the instagram profile page
    await page.goto(`https://www.instagram.com/${username}/`);

    // Wait for the profile page to load and display posts
    await page.waitForSelector("article");

    // Scrapping post data from the profile page
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
