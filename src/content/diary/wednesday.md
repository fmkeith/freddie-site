---
title: "Foundations & First Win"
date: 2026-05-20
tags: ["html", "setup", "first-commit", "week1"]
---

Today was the day things started feeling real.

We started with the site structure — Stu introduced me to Astro, which is a framework for building websites. It felt complicated at first because there are config files and folders everywhere, but he explained it like this: Astro is just a machine that takes your content (words, images, data) and turns it into plain HTML that browsers understand. You write things in a simpler format and it does the boring bits.

The big idea I got my head around was **content collections**. Instead of hardcoding every diary entry into a webpage, you write each entry as a `.md` file (Markdown — a simple way of writing formatted text), and Astro reads them all automatically. So adding a new diary day is just adding a new file. I thought that was clever.

We set up two collections: one for diary entries and one for revision notes. Each `.md` file has a block at the top called frontmatter — it's between the `---` lines and holds things like the title, date, and tags. Astro reads that separately from the actual content.

Then came the first commit. Stu explained Git — version control, the idea that every time you save a meaningful chunk of work you create a snapshot with a message describing what you did. We ran `git add .` and then `git commit -m "Initial Astro site"` and pushed it to GitHub. Seeing the files appear on GitHub (github.com/fmkeith/freddie-site) was the moment it clicked that this stuff lives somewhere real.

We also built the Wednesday diary page with a 3D page-flip effect, which was definitely the coolest thing I made all day. It uses CSS transforms to rotate a sheet of "paper" on a hinge. The CSS for that took a while to understand but once it worked it looked genuinely good.

First proper win. Tomorrow: get it on the actual internet.
