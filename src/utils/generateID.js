import { v4 as uuidv4 } from 'uuid';

export default function generateUUID() {
    const fullUUID = uuidv4(); // Generate a full UUID
    const shortUUID = fullUUID.replace(/-/g, '').slice(0, 12); // Remove dashes and truncate
  
    return shortUUID;
}