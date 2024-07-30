import { expect } from '@wdio/globals';
import { Header, Projects } from '../pageobjects/index.js';

import projectsData from '../../resources/projects.json' assert { type: 'json' };

describe('My Projects', () => {
  it('should show all projects', async () => {
    await Header.goTo('My Projects');
    const projectNames = await Projects.getAllProjectNames();

    projectsData.forEach((project) => {
      const projectName = project.link ? `${project.name} 🔗` : project.name;
      expect(projectNames).toContain(projectName);
    });
  });
});
