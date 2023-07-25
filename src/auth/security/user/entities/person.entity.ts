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
  first_name: string; // PRIMER NOMBRE

  @Column({nullable: true})
  last_name: string; // APELLIDO

  // TODO: se agrega el tipo: "CC: Cédula de ciudadanía"
  @Column({
    nullable: true,
    type: 'enum',
    enum: ['CUIT', 'DNI', 'CC'],
    default: 'CC'
  })
  identification_type: string; 

  @Column("varchar", { 
    length: 13 , 
    nullable: true
  })
  identification_number: string;

  @Column({nullable: true})
  phone_number: string; // TELEFONO

  @Column({
    type: 'datetime', 
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;
  
  @OneToOne(() => User, (user) => user.profile, {
    onUpdate: 'CASCADE'
  })
  user: User;
}
