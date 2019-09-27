import inquirer from 'inquirer'

enum projectType {
  SIMPLE = 'simple',
  ADMIN = 'pea-admin',
}

export async function getProjectType() {
  const answer: any = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: '选择项目模板？',
      choices: [projectType.SIMPLE, projectType.ADMIN],
    },
  ])
  return answer.projectType
}
