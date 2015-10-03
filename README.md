# Devops_Milestone1
Milestone 1 for CSC-DevOps Fall 2015

###Contributors
Abidaan Nagawkar (ajnagawk)   
Shivaji Vidhale (savidhal)   
Sushil Ganesh (sganesh4)

###Introduction
In this milestone we have implemented the feature of automatic builds. Basically, whenever any contributor commits changes to the repository, the project is automatically built. We have used a Jenkins Server for this purpose.

###Build
#####Setup
We have set up a Jenkins Server on Digital Ocean.

#####Capabilities
1) Triggered Builds: A Jenkins-Git Hook allows us to automatically build the project as soon as changes are committed to the repository by any contributor.   
2) Dependency Management: The package.json file contains all the dependencies for the project to be built successfully. These dependencies are installed by the build script.   
3) Build Script Execution: As soon as a build is triggered, the 'build' script runs which installs all the dependencies and builds the project.   
4) Build Status: Based on whether the build was a success or a failure, different tasks are carried out. This gives immediate feedback to the contributors regarding the status of the build.   
5) External Post-Build Job Triggers: If the build fails, an e-mail notification is sent to all contributors. If the build is a success, a "deploy" or "deploy-dev" script is executed depending on the current branch.   
6) Multiple Branches, Multiple Jobs: If changes are committed to the main branch and the build is successful, a "deploy" script is executed. This starts the application server. A simple "Hello World" application is used in this demonstration. On the other hand, if changes are committed to branch1 and the build is successful, a "deploy-dev" script is executed. This starts the application server but the application in this case displays the build history of that branch.   
7) Build History and Display over HTTP: The build history is displayed when changes are committed to branch1 and the build is successful. The Build History is also displayed on the Jenkins page for each job.   

### Screencast
[Checkout!](https://www.youtube.com/watch?v=Cnm4u82uVIc&feature=youtu.be&hd=1)