import type { ComponentProps } from 'react';
import PersonSvg from '~/assets/person.svg?react';
import './MissingPerson.css';


const MissingPerson = (props: ComponentProps<'svg'>) => (
  <PersonSvg {...props} />
);

export default MissingPerson;
