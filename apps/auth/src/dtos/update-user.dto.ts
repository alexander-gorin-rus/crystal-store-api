import { Role } from '@app/shared/enums/user-role.enum';

export class UpdateUserDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}
