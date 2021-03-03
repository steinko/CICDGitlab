let k8s = require('@pulumi/kubernetes')

module.exports = helloWorldService = new k8s.core.v1.Service('hello-world-service', 
{metadata: { name: 'hello-world-service'},
spec:{ selector: {app: 'hello-world' } ,
        ports: [{port: 8080, targetPort: 8080 } ],
        type: 'LoadBalancer'} } ) 