import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Unique
} from "typeorm";

import { Person } from "./person.entity";

/*
* Decorador @Entity: convierte una clase en una tabla
*/

// Propiedad name: nombre de la tabla
@Entity({name: 'users'})
@Unique(['email'])
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  username: string;

  @Column({unique:true})
  email: string;

  @Column()
  password: string;

  @Column({default: true})
  isActive: boolean;

  @Column({
    type: 'datetime', 
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;

  /*
  * Relacion 1:1 con persona
  */
  @OneToOne(() => Person, (person) => person.user, {
    cascade: ['update']
  })
  @JoinColumn({ name: 'person_id'})
  profile: Person;
}
