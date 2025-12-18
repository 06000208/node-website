// This file is the entry point for the project and controls load order
// The order of import statements matters as they're loaded asynchronously

import "./scripts/env.js"; // Populates environment variables
import "./scripts/process.js"; // node.js process events
import "./scripts/start.js"; // startup checks/messages
