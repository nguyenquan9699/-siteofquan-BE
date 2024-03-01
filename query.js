export function getName() {
  return 'Nguyen Minh Quan'
}

export function getPosition() {
  return 'DevOps Engineer'
}

export function getMail() {
  return 'nguyenquan9699@gmail.com'
}

export function getPhone() {
  return '+84966159365'
}

export function getAddress() {
  return 'Ho Chi Minh City, Vietnam'
}

export function getTelegram() {
  return 't.me/w3bqq'
}

export function getGithub() {
  return 'github.com/nguyenquan9699'
}

export function getIntro() {
  return (
    <p>
      As a DevOps/Cloud Engineer, I am proficient in Amazon Web Services, Linux, and CI/CD. My involvement in various software development roles has honed my expertise. Additionally, I have experience as a pentester at Viettel Cyber Security, which solidifies my background in security.<br></br>
      I possess a rapid learning ability and consistently maintain an open mindset, eagerly embracing new technology skills to improve products. I am proficient at both independent work and collaborative teamwork.
    </p>
  )
}

export function getMyServices() {
  return ['Web Developing', 'Automation Tools/Bot Developing', 'Integrating CI/CD', 'Optimizing costs, deploying on Cloud / VPS']
}

export function getTechskills() {
  return ['Python', 'Amazon Web Service', 'Linux', 'Git', 'Infrastructure as Code: Terraform, Ansible', 'Containerization: Docker, Docker Compose', 'CI/CD: Jenkins, Github Actions']
}

export function getSomeCode() {
  return [['Check This Page CI/CD Pinelines', 'https://github.com/nguyenquan9699/siteofquan-FE/tree/main/.github/workflows'], ['Check This Page Infrastructure', 'https://github.com/nguyenquan9699/siteofquan-infra'], ['Check This Page Source', 'https://github.com/nguyenquan9699/siteofquan-FE'], ['Check My Graduation Plugin Project', 'https://plugins.jetbrains.com/plugin/17142-9fix'], ['Some College Project Demos', 'https://www.youtube.com/watch?v=lijx1dan17Q&list=PLn6LVePqCRFdYKbVK3lPLYAe5WW3tKr50']]
}

export function getSoftskills() {
  return ['Eager to Learn Attitude', 'Fast Learner / Adaptability', 'Problem-solving', 'Empathy']
}

export function getLangskills() {
  return ['Vietnamese - Native', 'English - Ad']
}

export function getCertificates() {
  return (
    <><p>
      AWS Certified Solutions Architect - Associate<br></br>
      AWS Certified Sysops Administrator - Associate<br></br>
      HashiCorp Certified: Terraform Associate<br></br>
      AWS Certified Cloud Practitioner
    </p>
    <ul class="clients-list">
      <li class="clients-item">
        <a href="https://www.credly.com/badges/6810366a-6a22-40ca-a356-0216c7b12c53/public_url">
          <img src={saaImage} alt="client logo" width="150" height="150"></img>
        </a>
      </li>
      <li class="clients-item">
        <a href="https://www.credly.com/badges/cdc0e6c2-9bde-4f8b-bd47-1ac32dd1bd87/public_url">
          <img src={soaImage} alt="client logo" width="150" height="150"></img>
        </a>
      </li>
      <li class="clients-item">
        <a href="https://www.credly.com/badges/fc59dff5-dba3-4929-9007-9733e629008a/public_url">
          <img
            src={terraformImage}
            alt="client logo"
            width="150"
            height="150"
          ></img>
        </a>
      </li>
      <li class="clients-item">
        <a href="https://www.credly.com/badges/5c7da753-7c9e-4a7e-9f80-2045fa5da1c0/public_url">
          <img src={clfImage} alt="client logo" width="150" height="150"></img>
        </a>
      </li>
    </ul></>
  )
}

export function getAwards() {
  return (
    <p>
      Employee of the month of Viettel Cyber Security <br></br>
      Top 5 VCS newcomer's CTF
    </p>
  )
}

export function getPublication() {
  return (
    <a href="https://www.springerprofessional.de/en/security-issues-in-android-application-development-and-plug-in-f/19864406">
      <p class="about-text">
        Plug-in for Android Studio to Support Secure Programming (2021) at
        Springerprofessional
      </p>
      <br></br>
      <img src={springerImage} alt="client logo" width="134" height="100"></img>
    </a>
  )
}

export function getCredit() {
  return (
    <p>
      This portfolio based on {' '}
      <a
        style={{ display: 'inline' }}
        class="about-text"
        href="https://github.com/codewithsadee/vcard-personal-portfolio"
      >
        THIS SOURCE CODE
      </a>
      {' '}. <br></br>I am modifying and modularizing it using React.
    </p>
  )
}

export function getMyEducation(){
  return ['Ho Chi Minh City University of Science', 'Honors Program, Faculty of Information Technology', '2017 — 2021', 'During my university years, I pursued honors programming, where I delved into programming using various technologies. Alongside my coursework, I dedicated my free time to crafting several projects, including an Android application designed to mimic a car remote key for unlocking Linux and managing users passwords, an e-learning website, and terminal-based games developed in C++, among others.', 'Furthermore, I participated in scientific research, making significant contributions that led to the publication of a paper titled "Security Issues in Android App Development and Plug-ins for Android Studio to Support Secure Programming" by Springer. This paper also served as my graduation project, wherein I developed the Static Code Analysis Plugin. This tool aids Android programmers in writing safer code by offering flexible custom rules and recommended fixes, akin to SonarLint.']
}

export function getMyExp1(){
  return ['Viettel Cyber Security', 'Web Pentester', '2020 - 2021', 'While working at my previous company, I completed a training program on SysAdmin and Security knowledge to improve my Linux, Python skills. I was responsible for performing web penetration tests and testing backend code (mostly PHP and Java) with my mentor for a variety of clients, including banking institutions and government-owned entities.', 'My responsibilities also include writing detailed reports on found vulnerabilities, including critical bugs, for customers. I was also assigned the task of learning more and giving a presentation about the 1-day vulnerability.']
}

export function getMyExp2(){
  return ['Self-Employed', 'Software developer | Cloud Engineer', '2023', 'I work as a freelancer, developing web applications and automated tools as required. My feature project is to develop a tool to get real estate trade data from different sources serving filter and retrieve. Occasionally I also spot and submit some vulnerabilities in the wild.', 'Then I knew that using Amazon Web Services properly would save costs in some cases, as well as improve my capabilities, so I taught myself and applied it along with other DevOps skills. like Docker, Terraform, CI/CD with Jenkins.']
}