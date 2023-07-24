import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  OneToOne
} from "typeorm";

import { User } from "./user.entity";

@Entity('persons')
export class Person {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  full_name: string; // NOMBRE COMPLETO

  @Column({nullable: true})
  last_name: string; // APELLIDO

  @Column({
    nullable: true,
    type: 'enum',
    enum: ['CUIT', 'DNI'],
    default: 'DNI'
  })
  tipo_identificacion: string; 

  @Column("varchar", { 
    length: 13 , 
    nullable: true
  })
  num_identificacion: string;

  @Column({nullable: true})
  phone_number: string; // TELEFONO

  @Column({
    type: 'datetime', 
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;
  
  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
