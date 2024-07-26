// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require("child_process");

// Run the build command
execSync("next build", { stdio: "inherit" });

// Run the postinstall command to generate Prisma Client
execSync("prisma generate", { stdio: "inherit" });
