export interface UserAttributes {
  id_user: string;
  status: string;
  name: string;
  last_name: string;
  email: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}
