let k8s = require('@pulumi/kubernetes')

module.export = helloWorldDeployment = 
               new k8s.apps.v1.Deployment('hello-world-deployment', {
	                metadata:{name: "hello-world-deployment"},
                    spec: {
	                        template: {
		                                 metadata: {labels: { app: 'hello-world'}},
                                         spec: {   
                                                 containers: [{ 
	                                                            name: "hello-world-container",
                                                                image: 'docker.io/steinko/ci-cd-gitlab',
                                                                ports:[
	                                                                    {containerPort: 8080,
                                                                         name: 'hello-world-port' }
                                                                       ],
                                           
                                                             }]
                                                }    
                                        },
                           }
                  })
