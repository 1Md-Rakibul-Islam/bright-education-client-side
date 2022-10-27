import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-info text-white">
                <a class="navbar-brand text-white" ><h3>Blogs</h3></a>
            </nav>
            <main class="m-10">
                <div class="p-20">
                    <ul>
                        <li>            <h2>What is CORS?</h2>
                            <ul>
                            CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                            </ul></li>
                        <li>
                            <h2>Whay are you using firebase? What other options do have to implement</h2>
                            <ul>
                                <li>Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or modules. Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it easy for the developers to focus on the user experience of the application.

Many times, we receive queries to develop the application using firebase, but then we do a complete analysis of the requirement and suggest them the correct solution. The overall objective of the blog is to advise people on when they can choose firebase for their app and when it’s not a good choice to use it.

</li>
                                <li>
                                Authentication <br />
Firebase Auth product provides various methods to authenticate that includes email and password. Additionally, more methods are available to authenticate 3rd party providers like Google. You can either create your own interface or use the open source customizable user interface. Firebase offers easy to use SDK and ready-made UI libraries to authenticate the apps.

Real time database <br />
This feature ensures that the data between the users are stored and synchronized in real time with the help of the NoSQL database. When you want the app data to remain available even if the app goes offline, firebase will be the right choice. It updates the data syncs in just a few milliseconds. Firebase for mobile app development is scalable and accessible from client devices.

Dynamic linksbr <br />
With dynamic links, firebase ensures a customized user experience for your application across all the platforms. You can use dynamic links to drive the native app conversions. The user opening the dynamic link will be prompted to install the app in case the application is not already installed. By this, many people can install your application easily.

Cloud Messaging <br />
The firebase cloud messaging (FCM) allows you in delivering the push messages to indicate something of interest to the users of your app. You can send a message through two easy ways. First, you can write code on the backend to ping your app every time something gets updated, for example, direct users notifications.

                                </li>
                            </ul>
                        </li>
                        <li>
                            <h2>How does private route works?</h2>
                            <ul>
                            PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                            </ul>
                        </li>
                        <li>
                            <h2>what is node? how dose node route works?</h2>
                            <p>Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.

Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node</p>
                        </li>
                        <li><p>
                        Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.

No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.
                            </p></li>
                    </ul>

                </div>
            </main>
        </div>
    );
};

export default Blogs;