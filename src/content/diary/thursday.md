---
title: "Going Live"
date: 2026-05-21
tags: ["astro", "coolify", "deploy", "domain", "week1"]
---

Today was deploy day, and it turned out to be the most educational day of the three — not because everything went smoothly, but because almost nothing did.

The plan was simple: take the site we'd built and put it on the internet at freddiemason.dev. Stu uses a tool called Coolify, which is a self-hosted platform for deploying apps. You point it at a GitHub repo, tell it how to build your site, and it handles the server side. Or that's the idea.

The first problem was that Coolify's "static" buildpack — which is supposed to serve static websites — doesn't actually run the build step. It just copies files from the repo as-is. Our Astro site needs to run `npm run build` first to generate the actual HTML in a `dist` folder. Since we hadn't committed that folder (and you shouldn't — it's generated output), Coolify had nothing to serve. The site came up as a blank nginx welcome page.

To fix it we wrote a `Dockerfile` — a recipe file that tells Docker exactly how to build and run the app. Our one does two things in sequence: first it uses a Node.js image to run `npm ci` (install packages) and `npm run build` (generate the site), then it copies the result into a lightweight nginx image that serves the files. This is called a multi-stage build.

Then the second problem: the Docker build failed because Astro 6 requires Node.js version 22 or higher, and we'd accidentally put `node:20` in the Dockerfile. The error message was clear enough: "Node.js v20 is not supported by Astro! Please upgrade to >=22.12.0". We changed `FROM node:20-alpine` to `FROM node:22-alpine`, committed the fix, and pushed.

Third deployment: it worked. The build completed, the container started, and freddiemason.dev loaded the actual site.

A couple of things I'll remember: error messages are useful if you actually read them (the Node version one told us exactly what to do), and Git means nothing is ever really broken — you can always fix and push again. Also, writing a Dockerfile feels complicated until you see what it's actually doing, which is just following steps like a recipe.
