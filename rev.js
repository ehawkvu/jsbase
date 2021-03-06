import * as os from "os";
import * as std from "std";
import * as util from "./util.js";

var args = scriptArgs.slice(1)
var i = 0
var files = []

/* Parse arguments */
for (let i = 0; i < args.length; i++) {
	if (args[i] == "-V") {
		std.exit(0)
	} else if (args[i] == "-h") {
		std.exit(1)
	} else {
		files.push(args[i])
	}
}

/* if no files, act on standard input */
if (files.length == 0) {
	var lines = util.readStdinAsLines()
	for (var i = 0; i < lines.length; i++) {
		std.printf("%s\n", lines[i].split("").reverse().join(""))
	}
} else {
	var outbuffer = []
	for (let i = 0; i < files.length; i++) {
		var lines = util.readFileAsLines(files[i])
		for (let j = 0; j < lines.length; j++) {
			outbuffer.push(lines[j].split("").reverse().join(""))
		}
	}
	i = 0
	while (i < outbuffer.length) {
		print(outbuffer[i])
		i++
	}
}

