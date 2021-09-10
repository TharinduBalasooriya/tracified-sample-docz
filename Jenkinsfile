pipeline {
  agent any
    parameters { 
        choice(name: 'NODE_VERSION', choices: ['NodeJS 13.11.0', 'NodeJS 7.7.0'], description: '') 
    }   
  
  stages {
    stage('Build') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'npm install'
        script {
          if (env.BRANCH_NAME == "release") {
            sh 'npm run-script build'
          } else {
            sh 'npm run-script build'
          }
        }
      }
    }
 
    stage('Deploy to Production') {
      when { branch 'release' }
      steps {
        s3Upload consoleLogLevel: 'INFO', dontWaitForConcurrentBuildCompletion: false, entries: [[bucket: 'help.tracified.com', excludedFile: '', flatten: false, gzipFiles: false, keepForever: false, managedArtifacts: false, noUploadOnFailure: true, selectedRegion: 'ap-south-1', showDirectlyInBrowser: false, sourceFile: 'build/**', storageClass: 'STANDARD', uploadFromSlave: false, useServerSideEncryption: false]], pluginFailureResultConstraint: 'FAILURE', profileName: 'tracified-docs-jenkins-deployer', userMetadata: []

      }
    }
  }
  post {
    always {
      echo 'Process finished'
      deleteDir()
    }
  }
}