import * as k8s from '@pulumi/kubernetes'
import * as  clusterProvider from './cluster'

export const  helloWorldService = new k8s.core.v1.Service('hello-world-service', 
{metadata: { name: 'hello-world-service'},
spec:{ selector: {app: 'hello-world' } ,
        ports: [{port: 8080, targetPort: 8080 } ],
        type: 'LoadBalancer'} } ,{provider: clusterProvider}) 