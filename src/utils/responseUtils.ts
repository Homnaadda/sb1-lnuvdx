interface Response {
  keywords: string[];
  answer: string;
}

export const responses: Response[] = [
  // Basic greetings
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'hii'],
    answer: "Hello! I'm your cybersecurity assistant. I can help you with questions about cybersecurity, privacy, and online safety. How can I assist you today?"
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'farewell'],
    answer: "Goodbye! Stay safe online, and don't hesitate to return if you have more cybersecurity questions."
  },

  // Common Attack Types
  {
    keywords: ['phishing', 'phish', 'email scam'],
    answer: "Phishing is a social engineering attack where attackers pose as legitimate entities to steal sensitive information. Types include:\n\n1. Spear Phishing: Targeted attacks against specific individuals\n2. Whaling: Targeting high-level executives\n3. Vishing: Voice phishing via phone calls\n4. Smishing: SMS phishing\n\nProtection measures:\n- Use email filters\n- Enable 2FA\n- Verify sender addresses\n- Don't click suspicious links\n- Check for spelling errors\n- Be cautious of urgent requests"
  },
  {
    keywords: ['sql injection', 'sqli', 'sql attack'],
    answer: "SQL Injection (SQLi) is an attack that inserts malicious SQL code into database queries. Impact includes:\n\n1. Data theft\n2. Authentication bypass\n3. Data manipulation\n4. Remote command execution\n\nPrevention:\n- Use parameterized queries\n- Input validation\n- Least privilege access\n- WAF implementation\n- Regular security testing"
  },
  {
    keywords: ['xss', 'cross site scripting'],
    answer: "Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages. Types:\n\n1. Stored XSS\n2. Reflected XSS\n3. DOM-based XSS\n\nPrevention:\n- Input validation\n- Output encoding\n- Content Security Policy (CSP)\n- HTTPOnly cookies\n- X-XSS-Protection header"
  },
  {
    keywords: ['ddos', 'denial of service'],
    answer: "DDoS (Distributed Denial of Service) attacks overwhelm systems with traffic. Types include:\n\n1. Volumetric Attacks\n2. Protocol Attacks\n3. Application Layer Attacks\n\nMitigation:\n- Traffic filtering\n- Rate limiting\n- Load balancing\n- CDN usage\n- DDoS protection services"
  },
  {
    keywords: ['man in the middle', 'mitm'],
    answer: "Man-in-the-Middle (MitM) attacks intercept communications between two parties. Attack vectors:\n\n1. WiFi eavesdropping\n2. ARP spoofing\n3. DNS spoofing\n4. Session hijacking\n\nPrevention:\n- Use HTTPS\n- VPN implementation\n- Certificate pinning\n- Network encryption\n- Public WiFi caution"
  },
  {
    keywords: ['buffer overflow', 'buffer overrun'],
    answer: "Buffer Overflow occurs when programs write more data than allocated buffer space. Types:\n\n1. Stack-based\n2. Heap-based\n3. Integer overflow\n\nPrevention:\n- Bounds checking\n- ASLR\n- DEP implementation\n- Safe programming practices\n- Regular updates"
  },
  {
    keywords: ['csrf', 'cross site request forgery'],
    answer: "Cross-Site Request Forgery (CSRF) tricks users into executing unwanted actions. Impact:\n\n1. Account compromise\n2. Data modification\n3. Transaction fraud\n\nPrevention:\n- CSRF tokens\n- SameSite cookies\n- Custom headers\n- Request verification"
  },
  {
    keywords: ['rootkit', 'root kit'],
    answer: "Rootkits are stealthy malware that gains privileged access. Types:\n\n1. User-mode rootkits\n2. Kernel-mode rootkits\n3. Bootkit variants\n4. Firmware rootkits\n\nDetection & Prevention:\n- Secure boot\n- Anti-rootkit tools\n- Regular scanning\n- System monitoring"
  },
  {
    keywords: ['social engineering'],
    answer: "Social Engineering manipulates people into revealing information. Techniques:\n\n1. Pretexting\n2. Baiting\n3. Quid pro quo\n4. Tailgating\n\nPrevention:\n- Security awareness training\n- Verification procedures\n- Access controls\n- Security policies"
  },
  {
    keywords: ['keylogger', 'keystroke logging'],
    answer: "Keyloggers record keyboard inputs to steal sensitive data. Types:\n\n1. Hardware keyloggers\n2. Software keyloggers\n3. Kernel keyloggers\n4. Web-based keyloggers\n\nPrevention:\n- Antivirus software\n- Virtual keyboards\n- Regular scanning\n- Access controls"
  },
  {
    keywords: ['backdoor', 'back door'],
    answer: "Backdoors provide unauthorized system access. Types:\n\n1. Hardware backdoors\n2. Software backdoors\n3. Cryptographic backdoors\n\nPrevention:\n- Security audits\n- Access monitoring\n- Network segmentation\n- Regular updates"
  },
  {
    keywords: ['brute force', 'password cracking'],
    answer: "Brute Force attacks try all possible combinations to crack passwords. Types:\n\n1. Simple brute force\n2. Dictionary attacks\n3. Hybrid attacks\n4. Rainbow table attacks\n\nPrevention:\n- Strong passwords\n- Account lockouts\n- Rate limiting\n- Password salting"
  },
  {
    keywords: ['apt', 'advanced persistent threat'],
    answer: "Advanced Persistent Threats (APTs) are long-term targeted attacks. Characteristics:\n\n1. Sophisticated techniques\n2. Long-term access\n3. Specific targets\n4. Data exfiltration\n\nDefense:\n- Network monitoring\n- Threat intelligence\n- Security controls\n- Incident response"
  },
  {
    keywords: ['iot security', 'internet of things'],
    answer: "IoT Security concerns connected device protection. Risks:\n\n1. Weak authentication\n2. Insecure communications\n3. Lack of updates\n4. Data privacy\n\nBest Practices:\n- Strong passwords\n- Regular updates\n- Network segregation\n- Encryption"
  },
  {
    keywords: ['zero trust', 'zero trust security'],
    answer: "Zero Trust is a security model that trusts nothing by default. Principles:\n\n1. Verify explicitly\n2. Use least privilege access\n3. Assume breach\n\nImplementation:\n- MFA everywhere\n- Micro-segmentation\n- Continuous monitoring\n- Identity verification"
  },
  {
    keywords: ['malware analysis'],
    answer: "Malware Analysis examines malicious software behavior. Types:\n\n1. Static analysis\n2. Dynamic analysis\n3. Memory analysis\n4. Code analysis\n\nTools & Techniques:\n- Sandboxing\n- Reverse engineering\n- Behavior monitoring\n- Network analysis"
  },
  {
    keywords: ['threat hunting'],
    answer: "Threat Hunting proactively searches for security threats. Process:\n\n1. Hypothesis creation\n2. Tool selection\n3. Investigation\n4. Pattern analysis\n\nTools:\n- SIEM systems\n- EDR solutions\n- Log analysis\n- Threat intelligence"
  },
  {
    keywords: ['siem', 'security information'],
    answer: "Security Information and Event Management (SIEM) systems collect and analyze security data. Features:\n\n1. Log collection\n2. Real-time analysis\n3. Correlation\n4. Alerting\n\nBenefits:\n- Threat detection\n- Compliance\n- Incident response\n- Forensics"
  },
  {
    keywords: ['penetration testing', 'pentest'],
    answer: "Penetration Testing evaluates security by simulating attacks. Types:\n\n1. Black box testing\n2. White box testing\n3. Gray box testing\n\nPhases:\n- Reconnaissance\n- Scanning\n- Gaining access\n- Maintaining access\n- Analysis"
  },
  {
    keywords: ['incident response'],
    answer: "Incident Response handles security breaches. Phases:\n\n1. Preparation\n2. Identification\n3. Containment\n4. Eradication\n5. Recovery\n6. Lessons learned\n\nBest Practices:\n- Documentation\n- Team training\n- Regular drills\n- Tool readiness"
  }
];

export const findBestResponse = (input: string): string => {
  const normalizedInput = input.toLowerCase().trim();
  
  // First check for exact matches
  for (const response of responses) {
    if (response.keywords.includes(normalizedInput)) {
      return response.answer;
    }
  }
  
  // Then check for partial matches
  for (const response of responses) {
    for (const keyword of response.keywords) {
      if (normalizedInput.includes(keyword)) {
        return response.answer;
      }
    }
  }
  
  return `I understand you're asking about cybersecurity. To get the most accurate information, try asking specific questions about:\n\n- Common attacks (Phishing, SQL Injection, XSS)\n- Network security (DDoS, MitM)\n- Malware types (Rootkits, Keyloggers)\n- Security practices (Zero Trust, Pentesting)\n- Incident Response\n- Threat Hunting\n\nOr click one of the example questions on the right to see detailed responses.`;
};