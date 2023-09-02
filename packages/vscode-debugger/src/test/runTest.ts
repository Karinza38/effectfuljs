import * as path from 'path';

import { runTests } from "@vscode/test-electron";

async function go() {
	try {
		const extensionDevelopmentPath = path.resolve(__dirname, '../..');
		const extensionTestsPath = path.resolve(__dirname, 'extension');

		await runTests({
			extensionDevelopmentPath,
			extensionTestsPath,
			launchArgs: ["--disable-workspace-trust"]
		});


	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}
go()