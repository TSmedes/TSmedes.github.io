import React from "react";

import Header from "../../header";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">CapSource</h1>

        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <p>
            This is my sensior capstone project at Seattle Pacific University. I am working on this project in a scrum
            team with 5 other developers. The project is a chrome extension that allows users to submit corrections for
            video transcripts. Utilizing crowdsourcing, the extension will allow users to submit corrections to the
            transcript of a video. The extension will then use these corrections to improve the transcript for future
            users.
          </p>
        </div>
        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside">
            <li>TypeScript</li>
            <li>
              AWS
              <ul className="ml-6 list-disc list-inside">
                <li>CDK</li>
                <li>DynamoDB</li>
                <li>Lambda</li>
                <li>API Gateway</li>
                <li>Cognito</li>
              </ul>
            </li>
            <li>Next.js</li>
            <li>WXT</li>
            <li>Git</li>
            <li>Jira</li>
          </ul>
        </div>
        {/* <div className="p-4 border rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://github.com/TSmedes/go-parser" target="_blank" className="text-blue-500 hover:underline">
                GitHub Repo
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
