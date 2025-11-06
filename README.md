Social Anti-Fake News Platform

Group Name：project-01-anti-fakenews-cn-jjongmozzi

project leader: Chen Han  20232079
project member: Li Yiheng   20232047
project member：Huang Qiuyue  20232074


Team Members and Contributions (Including Coding/Deployment/Git Operations)：

Chen Han (Team Leader) - Student ID: 20232079 (80% workload)
![photo of chenhan](./screenshots/chenhan20232079.jpg)
1. Project Architecture and Foundation
Initialized project structure (created Vue+TypeScript project with Vite)
Configured core dependencies (Vue Router, Pinia, Axios, etc.) and environment variables
Designed global type system (defined core interfaces like News, Comment, Vote)
Built basic routing structure and layout components (App.vue, Layout.vue)
2. Core Function Development
Implemented the entire news module:
News list component (NewsList.vue) and pagination
News detail page (NewsDetailView.vue) and data rendering
News data management (newsStore.ts) and API service (newsService.ts)
Led the development of page interaction logic (pull-to-refresh, filters, loading status)
3. Deployment and Git Operations
Configured Vercel deployment parameters (vite.config.ts optimization, build command settings)
Created GitHub repository, initialized the project, and set branch protection rules
Wrote deployment documentation and resolved type checking and dependency conflicts during deployment
Merged team members' code and conducted final testing and launch
4. Global Optimization
Unified code specifications and fixed type checking issues
Optimized page loading performance and user experience
Handled cross-browser compatibility issues


Li Yiheng - Student ID: 20232047 (10% workload)
![photo of liyiheng](./screenshots/liyiheng20232047.jpg)
1. Comment Function Development
Comment list component (CommentList.vue) and comment item component (CommentItem.vue)
Comment data service (commentService.ts) and API interface encapsulation
Utility functions for comment time formatting and content truncation (utils/format.ts)
2. Auxiliary Function Implementation
Defined global constants (constants.ts): including API addresses, pagination size, etc.
Supplemented type declarations (shims-vue.d.ts): solved Vue component type recognition issues
Developed loading animations and empty state prompts for the comment section


Huang Qiuyue - Student ID: 20232074 (10% workload)
![photo of huangqiuyue](./screenshots/huangqiuyue20232074.jpg)
1. Voting and Interaction Function Development
Voting button component (VoteButton.vue) and vote result display component (VoteResult.vue)
Voting state management (voteStore.ts) and data service (voteService.ts)
Voting restriction logic (preventing duplicate votes, recording user voting status)
2. UI and Experience Optimization
Global message prompt system (messageStore.ts): handling success/error prompts
Navigation bar component (Header.vue) and page transition animations
Mobile-adaptive style adjustments (button size, spacing optimization)



Here are the details of our project:

Project Overview：
This project is a social media platform for anti-fake news, integrating news browsing, authenticity voting, and comment interaction. Users can access news, participate in judging news authenticity, post comments, and exchange opinions to jointly resist the spread of false information. The platform is built with modern frontend technologies and supports responsive design for various devices.


Technology Stack：
Core Framework: Vue 3 (Composition API)
State Management: Pinia
Routing: Vue Router
Type Checking: TypeScript
HTTP Client: Axios
Build Tool: Vite
Deployment Platform: Vercel
Code Hosting: GitHub


Core Features：
News Module: News list display, detail viewing, category filtering
Voting Module: credible/not credible voting for news authenticity and result display
Comment Module: Post comments, view comment lists, and comment interaction
Global Features: Page navigation, loading status prompts, error handling


Deployment and Access
Online Deployment URL: https://project-01-anti-fakenews-cn-jjongmo.vercel.app
GitHub Repository URL: https://github.com/chartchai-class/project-01-anti-fakenews-cn-jjongmozzi.git


Local Running Steps
Clone the repository: git clone [repository URL]
Install dependencies: npm install
Start development server: npm run dev
Build for production: npm run build


Project screenshot display:

five news items per page:
![screenshot1](./screenshots/1.png)
five news items per page and toggle between the front and back pages:
![screenshot2](./screenshots/2.png)
ten news items per page:
![screenshot3](./screenshots/3.png)
ten news items per page and toggle between the front and back pages:
![screenshot4](./screenshots/4.png)
twenty news items per page:
![screenshot14](./screenshots/14.png)
twenty news items per page and toggle between the front and back pages:
![screenshot15](./screenshots/15.png)
filter out fake news:
![screenshot5](./screenshots/5.png)
filter out real news:
![screenshot6](./screenshots/6.png)
news details page display:
![screenshot7](./screenshots/7.png)
comment function page display:
![screenshot8](./screenshots/8.png)
user posts comments:
![screenshot16](./screenshots/16.png)
user posted comment successfully:
![screenshot17](./screenshots/17.png)
vote and comment function page display:
![screenshot9](./screenshots/9.png)
users vote and comment:
![screenshot18](./screenshots/18.png)
voted and commented successfully；
![screenshot19](./screenshots/19.png)


Vercel screenshot of successful deployment page：
![screenshot10](./screenshots/10.png)
![screenshot11](./screenshots/11.png)


Github screenshot display of warehouse page:
![screenshot12](./screenshots/12.png)
![screenshot13](./screenshots/13.png)