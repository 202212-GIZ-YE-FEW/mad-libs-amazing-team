# CONTRIBUTORS and Best practices

- [@your_github_user_name](https://github.com/your_github_user_name)

- [@marwanbz](https://github.com/marwanbz)

GitHub Best Practices When Starting a Team Project
The following article is about some of the best practices that need to be applied when working on git projects within a team and with multiple contributors. We will tackle code quality, development workflow, reviews and project release.
No matter the scale of a project, data scientists or software engineers always have the opportunity to work in teams and contribute together to the same code base.
Although the use of version control systems such as git is obvious among teams member, discussing clear cohabitation rules is sometimes missed.
For this reason, I thought about summarizing few practices I often discuss when starting a new project with multiple contributors so that every team member could have in mind the common standards.
1. Agree on general git project conventions
1.1. Coding style
There are different conventions regarding the coding style, but I think that one of the most known ones is the Google style guide. It includes a set of rules to ensure that the code is clear and easily understandable not only by the owner but also by all the contributors.
Rules could be related to how variables are spelled such as (my_variable, MyVariable ...) or more general instructions on what should be done. For example (name variables according to what they are used for, and follow specific formatting when commenting functions…).
In Python language, pep-8 style is often used. Fortunately, even though you are not familiar with all the details of the adopted coding style you can still use packages like black to automatically format code or pylint to detect the portions of code breaking those rules.
Here is an article on how to set-up them along with an initial repo structure for your git project.
1.2 Use of branches naming convention
In a git project, a typical workflow would look like the following:
main: contains always a stable version of the source code, that runs in production as part of a release.
dev: contains the features that have been developed and ready to be tested.
test: used by quality engineers to test the stability of the code and the impact of the newly developed features.
We can add to this:
feature/your_new_feature: this syntax allows us to quickly find the work-in-progress features. Some teams use the issue number as part of the feature name. Moreover, having this convention could help set specific treatment in the CI on these branches before merges.
fix/your_bug_fix: for sake of clarity we usually distinguish between bug fixes and features. As bugs need to have a special and sometimes “urgent” treatment. When the bug is critical it’s released as soon as it is tested. If not, it could join the development cycle and be part of the next release.
1.3 Setup a simple starting project repository structure
It is always recommended to start with a basic structure containing a basic folder structure. Generally, IDEs could generate a starting structure or you can build your own custom template and make it the starting point of all your projects.
In particular, you can check this tool called cookiecutter that allows to do so. More details can be found in this article.
1.4 One feature = one branch
Well, if you are applying the naming convention and particularly naming your branch feature/your_new_feature, this rule should be automatically respected. This is important to make the review process easy as the reviewer would focus only on specific functionality.
2. Protect Branches and Ask For Code Review
GitLab and Github, the most used platforms for collaboration on code allow protecting branches from directly pushing code.
It is often recommended in a team context to protect the main and dev branches so that no commits are directly pushed on them. Instead, we allow pull requests on dev and give the right to the project maintainers to merge dev into main.
In other words, contributors should commit their code on their features/* branches, then open a pull request on dev. The code is first reviewed and then merged.
Finally, when the sprint development is ready the project maintainers could merge it into main.
3. Handle Secrets and Avoid Leakage
There are different ways to deal with secrets in Github projects: either through environment variables or through local files.
Yet, if the second way is adopted make sure to ignore those files from git tracking. It happens sometimes that someone commits their own secret file.
As a result, sensible information could be visible to anyone. This is why these kinds of files should be automatically added to .gitignore since the beginning of the project.
4. Create a Meaningful .gitignore File
Secrets are not the only files that we don’t want the versioning system to track.
Sometimes, we can have sample files, caches, logs, or virtual environment files locally.
Thus, it’s interesting to fill the .gitignore file with the unwanted paths. Here is an example:
5. Squash Commits When Merging
Also, as part of the best practices, we usually squash commits when merging a branch.
Actually, this means that only the last commit of a branch is kept when it is merged. This practice may reduce the number of commits on the main branch and keep only the relevant ones.
Moreover, to avoid ending up with a list of unused branch with out-dated code we can also delete the source branch when merging.
6. Use Tags and Releases
Tags are very practical when it comes to code versioning. They are a way to reference a specific version of the project and avoid having multiple branches (one for each release) that could become easily outdated and behind the main branch.
This practice along with branch deletion on merge allows to keep the minimal number of open branches and thus makes the navigation in the repo fluid.
Conclusion
We have seen in this article some of the best practices that could be applied in the context of a team when working on git projects. These practices include good communication among the team member to ensure that everyone has the same working standards as well as some technical tips to manage the development workflow.
styleguide
Google Style Guides
Style guides for Google-originated open-source projects
MediumMedium
Genenate your Github repository structure in seconds with cookiecutter
This story is about using a python package that allows any Github practitioner to create git projects templates.
Reading time
4 min read
Dec 5th, 2022
https://medium.com/p/829a57b71f5e

7:05
5 Language features
JavaScript includes many dubious (and even dangerous) features. This section delineates which features may or may not be used, and any additional constraints on their use.
5.1 Local variable declarations
5.1.1 Use const and let
Declare all local variables with either const or let. Use const by default, unless a variable needs to be reassigned. The var keyword must not be used.
5.1.2 One variable per declaration
Every local variable declaration declares only one variable: declarations such as let a = 1, b = 2; are not used.
5.1.3 Declared when needed, initialized as soon as possible
Local variables are not habitually declared at the start of their containing block or block-like construct. Instead, local variables are declared close to the point they are first used (within reason), to minimize their scope.
5.1.4 Declare types as needed
JSDoc type annotations may be added either on the line above the declaration, or else inline before the variable name if no other JSDoc is present.

