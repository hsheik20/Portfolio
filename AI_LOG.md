# AI Interaction Log

**Project:** Artifact 1 — Personal Portfolio
**Name:** Husein Sheikh
**AI used:** ChatGPT
**Dates:** October 8–11, 2026

The prompts and responses below summarize our interactions
rather than providing a word-for-word transcript.

## 1. Understanding the assignment

**My prompt:**  
Break down the assignment for me so I understand what I need to
build and submit.

**AI response:**  
ChatGPT explained that I needed a frontend-only portfolio with
five artifact cards. Artifact 1 describes the portfolio itself,
while cards 2–5 hold my ideas for future projects. I also needed
an interaction log in the repository and a publicly accessible
website link to submit on Canvas.

## 2. Creating the website foundation

**My prompt:**  
I want a modern, inviting, warm website with a long single-page
layout, parallax effects, and scrolling transitions. Use dark
Java and coffee browns, olive, and soft creamy tones. Generate
the HTML, CSS, and JavaScript foundation.

**AI response:**  
ChatGPT generated three separate files with a navigation bar,
an introduction, About and Process sections, five artifact
cards, and a closing section. It used custom CSS and added
scroll reveals, decorative parallax, mobile navigation,
and reduced-motion support.

## 3. Revising the navigation

**My prompt:**  
Change the navigation to About, Skills, Project, and Contact.
Move the links to the right, make the text slightly bigger,
and remove the “hs.” logo and navbar border.

**AI response:**  
ChatGPT provided updated HTML and CSS for the links, alignment,
and font size. When the links still looked centered, it suggested
more specific positioning rules. It also explained which HTML
to remove for the logo and how to remove the border.

## 4. Writing my introduction

**My prompt:**  
Use my background and interests to introduce me. Make it sound
natural and professional, with some personality. Mention that
I’m a Computer Science student at the University of Washington,
an aspiring data scientist, and interested in ML, AI, and data
visualization. Include that I’m looking forward to opportunities
where I can strengthen my skills and grow.

**AI response:**  
ChatGPT revised my introduction and shortened it for the homepage.
It helped separate the quick introduction from the more detailed
About section. It also generated a larger “Hello, I am Husein
Sheikh” heading above the paragraph.

## 5. Adding my portrait

**My prompt:**  
I want to add my personal photo inside the green dome-shaped
frame next to my introduction.

**AI response:**  
ChatGPT provided an image element and CSS to fit the photo into
the curved frame. It added an olive border and suggested a
mobile layout so the portrait would remain visible on
smaller screens.

## 6. Troubleshooting the photo

**My prompt:**  
The photo is too large and mostly shows its background.
Several changes haven’t done anything. Here is my actual code.

**AI response:**  
ChatGPT first suggested different image-fitting rules, but those
didn’t resolve the issue. After inspecting the code, it identified
missing closing braces that placed the photo styles inside
media queries. It provided corrected CSS so the sizing rules
would apply on desktop too.

## 7. Refining the portrait frame

**My prompt:**  
It’s improved now. Make the image fill the curved shape while
keeping the border exposed, and remove the overlapping circle.

**AI response:**  
ChatGPT changed the image fitting to fill the dome and explained
how to adjust the crop position. It also identified the
decorative circle element to remove from the HTML.

## 8. Developing the Kanso idea

**My prompt:**  
I want one of my projects to help people break away from digital
distractions. I shared my existing Kanso proposal and asked
whether a smaller version could work within an artifact’s scope.

**AI response:**  
ChatGPT read the proposal and suggested starting with a focus
timer, a progress dashboard, earned virtual rewards, and a simple
avatar upgrade. It explained that payments and real group
accountability would be larger additions. It helped summarize
Kanso as a future project idea for the portfolio.

## 9. Developing the Study Session Planner idea

**My prompt:**  
I want a planner for people with ADHD or anyone who struggles
with focus, anxiety, or feeling overwhelmed. It should break
work into manageable sessions, carry unfinished tasks forward,
and track what helps people focus and what gets in their way.

**AI response:**  
ChatGPT organized the idea around planning, carrying work forward,
reflecting, and discovering patterns. It suggested a first version
with a task list, daily schedule, session check-ins, and charts
based on self-reported focus ratings.

## 10. Choosing the Sports Analytics Dashboard

**My prompt:**  
I like the fantasy football dashboard idea. I was interested
in doing something with sports analytics anyway.

**AI response:**  
ChatGPT suggested a Sports Analytics Dashboard starting with
football and fantasy football. It would compare performance,
usage, and consistency through charts. A first version could
use an uploaded dataset rather than live data.

## 11. Choosing the Cooking & Baking Hub

**My prompt:**  
I’m interested in a cooking and baking hub with recipes from
favorite creators and recommendations based on what users
provide. I’d also like a place for people to connect and
discuss their favorite recipes.

**AI response:**  
ChatGPT helped shape the idea into a recipe discovery hub with
creator links, ingredient and preference filters, and saved
favorites. It explained that shared discussions would need
additional infrastructure and could be explored later.
I chose this as the fourth future project idea.

## 12. Writing the artifact placeholders

**My prompt:**  
Generate the four placeholder cards and explain the ideas
behind each. Add a spot for future reflections.

**AI response:**  
ChatGPT generated descriptions for Kanso, the Study Session
Planner, the Sports Analytics Dashboard, and the Cooking &
Baking Hub. It added reflection placeholders and space for
future artifact links.

## 13. Changing the cards’ appearance

**My prompt:**  
The artifacts look too much like slides or separate pages.
I want boxed cards with a preview area on top, a title,
a short description, a hover effect, and a View Project button.

**AI response:**  
ChatGPT generated a new responsive card layout with separate
class names. It used styled text previews and disabled the
buttons for projects that haven’t been built yet.

## 14. Fixing the Projects section

**My prompt:**  
The Projects title is still left-aligned and overlaps near
Skills. The cards also became too narrow to read. Here are
my HTML and CSS files.

**AI response:**  
ChatGPT identified a missing Projects section wrapper, a missing
closing angle bracket in the Skills tag, and some CSS inside
the wrong media query. It later found three nested card-grid
containers, which were squeezing the cards. It explained how
to keep one grid containing all five cards.

## 15. Building a visual Skills section

**My prompt:**  
Make my Skills section a graph-like visualization with bubbles
that expand when hovered over. Reference my résumé and
internship experience to choose the skills.

**AI response:**  
ChatGPT reviewed my résumé and generated bubbles for Power BI,
SQL, Python and Java, automation, APIs and cloud, web development,
communication, and ML/AI. It labeled ML/AI as a growing interest
rather than established professional experience.

## 16. Refining the skill bubbles

**My prompt:**  
Rename “Building for the Web” to “Web Dev.” Fix the hover effect,
and make the section and bubbles use consistent colors.
Add icons and small technology-logo badges in the corner.

**AI response:**  
ChatGPT updated the label and added CSS hover behavior alongside
the JavaScript interactions. It revised the design to cream
bubbles on a coffee background, with olive line icons and
corner badges. Some technology logos load from an external
icon source.

## 17. Choosing an About layout

**My prompt:**  
I want to tell my programming journey through Past, Present,
and Future without making it too heavy to read. Show me
layout examples before implementing it.

**AI response:**  
ChatGPT showed a journey timeline, alternating story panels,
and interactive story tabs. I chose the timeline, and it
generated three chapters covering Year Up and Microsoft,
returning to school at UW, and my goal of becoming a
data scientist.

## 18. Adding contact links

**My prompt:**  
Add GitHub, LinkedIn, and email icons with ways to reach me,
or potentially a contact form.

**AI response:**  
ChatGPT generated icons and direct links, using my résumé for
my email and LinkedIn information. It left a placeholder for
my GitHub profile. It explained that a form that delivers
messages would need additional setup.

## 19. Resizing the contact icons

**My prompt:**  
The logos are too large. Make them smaller and horizontal,
with a line between them and a brown border around the group.
They still aren’t displaying correctly—here is the CSS.

**AI response:**  
ChatGPT provided a compact horizontal layout and explicit SVG
dimensions. It pointed out an extra closing brace and suggested
placing the contact styles outside media queries, with more
specific selectors to match the Contact HTML.

## 20. Clarifying the assignment requirements

**My prompt:**  
Review the assignment and the Markdown and Artifacts guide.
Do I need individual cards, or actual linked pages with
different color themes? Have I fulfilled the requirements?

**AI response:**  
ChatGPT explained that Claude’s artifact feature is different
from the course’s Artifacts 1–5. The color-theme examples are
optional design exercises. For Artifact 1, cards 2–5 only need
proposed ideas and room for future links and reflections.
It also reminded me to check the portfolio reflection, log,
deployment, and Canvas submission.

## 21. Writing commit messages

**My prompt:**  
Help me write commit messages for GitHub.

**AI response:**  
ChatGPT suggested messages describing the actual changes,
including creating the portfolio, personalizing the introduction,
adding cards, fixing layouts, and updating the interaction log.

## 22. Publishing through GitHub Pages

**My prompt:**  
Remind me how to publish the website and how to know when
deployment finishes.

**AI response:**  
ChatGPT explained how to publish from the main branch and root
folder through GitHub Pages. It also explained how to check
the Actions deployment status and find the live link.
I followed the steps and confirmed that deployment worked.

## 23. Preparing this interaction log

**My prompt:**  
Generate the AI log, make it sound more like me, and organize
every section with “My prompt” and “AI response.”
Remove the repository-setup section and generate the updated log.

**AI response:**  
ChatGPT summarized the conversation and revised the log’s wording
and structure. This file records the requests, design changes,
and troubleshooting we worked through. I confirmed deployment
myself; ChatGPT did not independently verify the final live
website or Canvas submission.
