pipeline {
  agent any
  stages {
    stage('pull latest changes') {
      steps {
        sh 'git pull origin master'
      }
    }
  }
}