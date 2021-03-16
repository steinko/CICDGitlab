import {Config} from "@pulumi/pulumi"

config = new Config()
/// Docker config
module.export = dockerUserName = config.require("dockerUserName");
module.export = dockerPassword = config.require("dockerPassword");

// GCP Config
module.export = cloudLocation = config.require("cloudLocation");
module.export = cloudRegion = config.require("cloudRegion");
module.export = cloudProject = config.require('cloudProject')