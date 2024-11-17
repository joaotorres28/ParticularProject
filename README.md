# Particular Project - 2024/2025

Repository for the Particular Project.

---------------------------------------

### **Description of the Project**

The Decentralized File Storage System is designed to allow users to store, share, and manage 
files across a distributed network of nodes, enhancing fault tolerance, security, and privacy. 
Files are distributed across multiple nodes (peers) to ensure that no single authority controls 
the system. 

### **Core Features (Minimum Viable Product)** 

1. File Upload/Download: Users can upload and download files from the system, which 
are distributed across nodes in smaller chunks. 
2. User Authentication: A basic login/registration system to manage user access and 
private storage. 
3. File Sharing: Users can share files with others via links or unique permissions. 
4. Data Replication: Files are replicated across multiple nodes for redundancy. 
5. Basic Encryption: Files are encrypted before upload to ensure privacy. 
6. Node Management: A system for managing user nodes and their contributions to the 
decentralized network. 


### **Technologies to be Used**

1. IDE (VS Code): Development will be conducted using a modern IDE like 
VS Code, supporting various programming languages such as JavaScript, Python, Java, etc. 
2. Frontend Framework (Angular or React): The frontend will be developed using 
Angular or React to create a dynamic and responsive user interface for functionalities 
like file upload, download, and management. 
3. UML Editor (Visual Paradigm): UML diagrams will be designed using Visual Paradigm to illustrate the system architecture, including class, sequence, and deployment diagrams. 
4. Code Repository (GitHub): Source code will be hosted on GitHub allowing for version control and collaboration. 
5. RDBMS (e.g., MySQL, Microsoft SQL Server): An RDBMS will be used to manage user authentication data and access permissions. 
6. NoSQL DBMS (e.g., MongoDB): A NoSQL database like MongoDB will store metadata related to files, chunks, and nodes, ensuring scalability and flexibility. 
7. REST Client (e.g., Postman): Postman will be used for testing RESTful APIs, which handle file operations and user management. 
8. SOAP Client (e.g., SOAPUI): SOAPUI will be employed to test any SOAP-based web services required for specific integrations. 
9. Container Software (e.g., Docker): Docker will be utilized to containerize the application, making it easier to deploy across different environments. 
10. UI Testing Client/Software (e.g., Selenium): Selenium will automate UI testing to validate core functionalities such as file upload/download. 
11. Cloud Deployment (e.g., AWS, Azure, Google Cloud): The application will be deployed on cloud platforms like AWS, Azure, or Google Cloud for scalability and availability. 
12. CI/CD Pipeline: Continuous integration and deployment will be configured using tools like GitHub Actions to automate testing and cloud deployment.

-------------------------------------------------------------------------------------------------------------------------

### **Use Cases**

1. As a User I want to create an account.
2. As a User I want to log in to an account.
3. As a User I want to access the account settings.
4. As a User I want to log out of an account.
5. As a User I want to upload files to the system.
6. As a User I want my files to be divided into chunks.
7. As a User I want my files to be stored across multiple nodes.
8. As a User I want to download a previously uploaded file.
9. As a User I want to view a list of my uploaded files.
10. As a User I want to delete a file from the system.
11. As a User I want to view the file size, upload date and number of nodes.
12. As a User I want to generate a unique link for a file I uploaded.
13. As a User I want to share a link with other users.
14. As a User I want to assign permissions(view,donwload) to shared files.
15. As a User I want to use a shared link to access a file.
16. As a User I want to use a shared link to download a file.
17. As a User I want to be alerted if any of my files are temporarily unavailable.
18. As a User I want only those with permission or access rights to be able to decrypt and access my data.
19. As a User I want to receive a notification when my file is accessed or my sharing permissions are modified.
20. As a System Administrator I want files to be encrypted before upload.
21. As a System Administrator I want files to be decrypted after download.
22. As a System Administrator I want files to be replicated across multiple nodes.
23. As a System Administrator I want to monitor all active nodes(storafe, contributions, uptime).
24. As System Administrator I want to receive alerts if a node goes offline or has storage issues.

-------------------------------------------------------------------------------------------------------------------------

# Views

A combination of two architectural representation models will be adopted: C4 and 4+1.

The 4+1 Views Model proposes describing the system through complementary views, thus allowing the requirements of the various software stakeholders, such as users, system administrators, project managers, architects and programmers, to be analyzed separately. The views are thus defined as follows:

- Logical view: relating to the aspects of the software aimed at responding to business challenges;
- Process view: relating to the flow of processes or interactions in the system;
- Development view: relating to the organization of the software in its development environment;
- Physical view: relating to the mapping of the various components of the software onto hardware, i.e. where the software runs;
- Scenario view: relating to the association of business processes with actors capable of triggering them.

The C4 Model advocates describing software through four levels of abstraction: system, container, component and code. Each level adopts a finer granularity than the level that precedes it, thus giving access to more detail of a smaller part of the system. These levels can be likened to maps, e.g. the system view corresponds to the globe, the container view corresponds to the map of each continent, the component view to the map of each country and the code view to the map of roads and neighborhoods in each city.
Different levels allow you to tell different stories to different audiences.

The levels are defined as follows:
- Level 1: Description (framework) of the system as a whole;
- Level 2: Description of the system's containers;
- Level 3: Description of container components;
- Level 4: Description of the code or smaller parts of the components (and as such will not be covered).

It can be said that these two models expand along different axes, with the C4 Model presenting the system at different levels of detail and the 4+1 View Model presenting the system from different perspectives. By combining the two models it becomes possible to represent the system from different perspectives, each with various levels of detail.

To visually model/represent both what has been implemented and the ideas and alternatives considered, the Unified Modeling Language (UML) was used.

-------------------------------------------------