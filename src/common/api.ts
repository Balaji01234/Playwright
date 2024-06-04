import { Page } from '@playwright/test';
import C from './constants';

export async function getAuth(page: Page) {
  const storageState = await page.request.storageState();
  const user = storageState['origins'][0]['localStorage'].find((item) => item.name == 'user');
  return `Bearer ${JSON.parse(user['value'])}`;
}

export async function getSnaptrudeFolderContent(
  page: Page,
  folderId: string | number,
  contentType: 'folders' | 'projects'
) {
  const auth = await getAuth(page);
  const resp = await page.request.post(C.API_URL + '/folder/', {
    headers: {
      Auth: auth
    },
    form: {
      folder: folderId,
      offset: 0,
      limit: 500,
      sortby: 'latest'
    }
  });
  const data = await resp.json();
  const content: object[] = data[contentType];
  return content?.reduce((acc, cur) => {
    return {
      ...acc,
      [cur['name']]: cur
    };
  }, {});
}

export async function createSnaptrudeFolder(page: Page, name: string) {
  const auth = await getAuth(page);
  const resp = await page.request.post(C.API_URL + '/folder/create', {
    headers: {
      Auth: auth
    },
    form: {
      name,
      parent: 'root'
    }
  });
  const data = await resp.json();
  return {
    folder: data['folder']
  };
}

export async function createSnaptrudeProject(page: Page, name: string, folderId: string | number) {
  const auth = await getAuth(page);
  const resp = await page.request.post(C.API_URL + '/newBlankProject/', {
    headers: {
      Auth: auth
    },
    form: {
      project_name: name,
      parent: folderId,
      is_template: 0
    }
  });
  const data = await resp.json();
  return {
    project: data['project']
  };
}
