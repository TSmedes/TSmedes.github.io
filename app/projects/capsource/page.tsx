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
          <h3 className="text-2xl font-semibold mb-2 mt-4">My learnings</h3>
          <ul className="list-disc list-inside">
            <li>Developed a cloud-native serverless API using AWS API Gateway, Lambda, DynamoDB, and Cognito</li>
            <li>Maintained infrastructure-as-code (IaC) with AWS CDK in TypeScript, ensuring consistency across environments</li>
            <li>Orchestrated infra deployment with GitHub Actions, including synthesizing CloudFormation and deploying stacks</li>
            <li>Designed API specifications in OpenAPI (Swagger) format for clear and standardized endpoint documentation</li>
          </ul>
        </div>
        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Resources</h2>
          <ul className="list-disc list-inside">
            <li>Extension: <a href="https://chromewebstore.google.com/detail/capsource/gpfbeloigegemgfcjjhiedgjpkpoenok" target="_blank" className="text-blue-500 hover:underline">Chrome Web Store</a></li> 
            <li>
              Dashboard: <a href="https://capsource.vercel.app/" target="_blank" className="text-blue-500 hover:underline">https://capsource.vercel.app/</a>
           </li>
         </ul>
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
