import React from "react";

import Header from "../../header";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">CLI Encryption</h1>

        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <p>
            This project was part of a group project created for a class at Seattle Pacific University. It implements a
            symmetric encryption and decryption algorithm using a single key. The project was written in C++ and
            implemented a command line interface (CLI) for the user to interact with the program. The algorithm uses an
            XOR operation and a Vigenere cipher to encrypt and decrypt the user&apos;s input.
          </p>
        </div>
        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside">
            <li>C++</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-semibold mb-2">Useful Links</h2>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://github.com/TSmedes/encryption-project"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
