export default function censorEmail(email) {
    const [localPart, domain] = email.split('@');
  
    if (!localPart || !domain) {
      throw new Error('Invalid email format');
    }
  
    const censorPart = (part) => {
      if (part.length === 1) {
        return part;
      }
      return part[0] + '*'.repeat(part.length - 2) + part[part.length - 1];
    };
  
    const [domainName, topLevelDomain] = domain.split('.');
    if (!domainName || !topLevelDomain) {
      throw new Error('Invalid domain format');
    }
  
    return `${censorPart(localPart)}@${censorPart(domainName)}.${topLevelDomain}`;
  }