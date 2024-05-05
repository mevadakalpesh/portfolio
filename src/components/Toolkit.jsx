import "../pages/About.css";

const Toolkit = () => {
  return (
    <div className="toolkit-container">
      <p id="toolkit" className="toolkit-bg-header">
        Toolkit
      </p>
      <div className="toolkit">
        <div className="tool-section frontend">
          <p className="tool-section-header frontend-header">Frontend</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/javascript.png" alt="javascript logo" />
              <p>JavaScript</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/react.png" alt="react logo" />
              <p>React.js</p>
            </div>
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/vuejs.png" alt="Vue logo" />
              <p>Vue.js</p>
            </div>
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/html.png" alt="html logo" />
              <p>HTML</p>
            </div>
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/css.png" alt="css logo" />
              <p>CSS</p>
            </div>
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/bootsrap.png" alt="Bootsrap logo" />
              <p>Bootsrap</p>
            </div>
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/livewire.png" alt="livewire logo" />
              <p>Livewire</p>
            </div>
            
          </div>
        </div>
        <div className="tool-section backend">
          <p className="tool-section-header backend-header">Backend</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/php.png" alt="php logo" />
              <p>PHP</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/laravel.png" alt="laravel logo" />
              <p>Laravel</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/wordpress.png" alt="wordpress logo" />
              <p>Wordpress</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/mysql.png" alt="mysql logo" />
              <p>MYSQL</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/rest-api.png" alt="rest-api logo" />
              <p>REST API</p>
            </div>
          </div>
        </div>
        <div className="tool-section tools">
          <p className="tool-section-header tools-header">Tools</p>
          <div className="tool-logos">
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/git.png" alt="git logo" />
              <p>Git</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/vscode.png" alt="vscode logo" />
              <p>VS Code</p>
            </div>
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/github.png" alt="github logo" />
              <p>GitHub</p>
            </div>
            
            <div className="single-tool-container">
              <img src="/toolkit-logos/jira.png" alt="Jiraa logo" />
              <p>Jira</p>
            </div>
            
          </div>
        </div>
        <div className="tool-section learning">
          <p className="tool-section-header learning-header">System</p>
          <div className="tool-logos">
            <div className="single-tool-container">
              <img src="/toolkit-logos/linux.png" alt="Linux logo" />
              <p>Linux</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/ios.png" alt="ios logo" />
              <p>IOS</p>
            </div>
            <div className="single-tool-container">
              <img src="/toolkit-logos/window.png" alt="window logo" />
              <p>Window</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
