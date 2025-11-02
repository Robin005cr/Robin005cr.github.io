import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bugs.css';

const Bugs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load highlight.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
    script.onload = () => {
      // Load C++ language support
      const cppScript = document.createElement('script');
      cppScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/cpp.min.js';
      cppScript.onload = () => {
        if (window.hljs) {
          window.hljs.highlightAll();
        }
      };
      document.head.appendChild(cppScript);
    };
    document.head.appendChild(script);

    // Add highlight.js CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/solarized-dark.min.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      if (window.hljs) {
        window.hljs.highlightAll();
      }
    };
  }, []);

  useEffect(() => {
    const headings = document.querySelectorAll('.heading-animate');
    headings.forEach((h, i) => {
      h.style.animationDelay = (i * 0.2) + 's';
    });
  }, []);

  const copyCode = (button) => {
    const code = button.parentElement.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      button.textContent = '✅';
      setTimeout(() => button.textContent = '📋', 1500);
    });
  };

  const bugs = [
    {
      title: "1. cin in loop",
      issue: `#include <iostream>
#include <limits>

using namespace std;

int main()
{
    int number;

    while (true)
    {
        cout << "Enter an integer: ";
        cin >> number;
    }

    return 0;
}`,
      fix: `#include <iostream>
#include <limits>

using namespace std;

int main()
{
    int number;

    while (true)
    {
        cout << "Enter an integer: ";
        cin >> number;

        cout << "\\n--- Stream State Flags ---\\n";
        cout << "cin.fail(): " << cin.fail() << endl;
        cout << "cin.bad(): " << cin.bad() << endl;
        cout << "cin.eof(): " << cin.eof() << endl;
        cout << "cin.good(): " << cin.good() << endl;

        if (cin.fail())
        {
            cin.clear(); // Clear the error flags
            cin.ignore(numeric_limits<streamsize>::max(), '\\n');
            cout << "\\nInput was invalid. Error cleared.\\n";
        }
    }

    return 0;
}`
    },
    {
      title: "2. Float to integer conversion leads to data loss.",
      issue: `#include <iostream>
#include <limits>

using namespace std;

int main()
{
    int number;
    float a = 4.89;

    number = (int)a; // Implicit conversion from float to int

    cout <<number;  // number = 4, 0.89 is lost

    if(number >4)
    {
        cout << "Number is greater than 4" << endl;
    }
       

    return 0;
}`,
      fix: `#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int number;
    float a = 4.89;

    number = static_cast<int>(round(a)); // round

    cout <<number;  // number = 5, 0.89 is rounded to 1

    if(number >4)
    {
        cout << "Number is greater than 4" << endl;
    }
       

    return 0;
}`
    }
  ];

  return (
    <div className="bugs-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div className="max-w-5xl mx-auto p-6">
        {bugs.map((bug, index) => (
          <div key={index}>
            <h2>{bug.title}</h2>

            <section className="mb-10 code_container">
              <h2 className="text-2xl font-semibold heading-animate" style={{ color: '#0096FF' }}>Issue</h2>
              <div className="code-container">
                <button className="copy-icon" onClick={(e) => copyCode(e.target)}>📋</button>
                <pre><code className="language-cpp">{bug.issue}</code></pre>
              </div>
            </section>

            <section className="mb-10 code_container">
              <h2 className="text-2xl font-semibold heading-animate" style={{ color: '#0096FF' }}>Fix</h2>
              <div className="code-container">
                <button className="copy-icon" onClick={(e) => copyCode(e.target)}>📋</button>
                <pre><code className="language-cpp">{bug.fix}</code></pre>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bugs;

