node {
	def registryCredential = 'AWS-ECR'
	def registry = '694833324522.dkr.ecr.ap-northeast-2.amazonaws.com'

    stage ('Checkout') {
        git branch: 'develop', credentialsId: 'jaeyeon.park', url: 'http://10.62.150.51:8000/birdbox/birdbox-frontend.git'
    }

	stage ('Set Env') {
		sh "sed -i -e 's/birdbox/birdboxdev/g' ./src/main.js"
	}
    
    stage ('npm Build') {
        sh "npm install"
        sh "npm run build"
    }
    
    stage ('Docker Build') {
        sh "docker build -t $registry/birdbox/frontend-dev:latest ."
    }
    
    stage ('Docker Push') {
        sh "/usr/local/bin/aws ecr get-login --no-include-email --region ap-northeast-2 | sh"
        sh "docker push $registry/birdbox/frontend-dev:latest"
	}
    
    stage ('K8S Deploy') {
        withCredentials([file(credentialsId: "key-ec2-cnl-bastion", variable: 'KEY')]){
              sh "ssh -i $KEY ec2-user@15.165.136.230 './birdbox-dev/eksdeploy_frontend_dev.sh'"
        }
    }
}
