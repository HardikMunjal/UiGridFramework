import getListWorkSpace from './WorkSpaceManagemet/List';
import getListObject from './ObjectManagement/List';

export default function handler(req, res) {
  const { datatypeProps } = req.body;

  if (datatypeProps === 'workspaceMgmt') {
    const responseData = getListWorkSpace();
    res.status(200).json({ message: 'List of WorkSpace', data: responseData });
  } else if (datatypeProps === 'objectMgmt') {
    const responseData = getListObject();
    res.status(200).json({ message: 'List of Object', data: responseData });
  } else {
    res.status(400).json({ message: 'Invalid datatypeProps' });
  }
}
  