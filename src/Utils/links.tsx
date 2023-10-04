import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'Status',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'Todos Jobs',
    path: 'allJobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'Adcionar Jobs',
    path: 'addJob',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'Perfil',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;