import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Set } from '../../set/entities/set.entity';

@Entity('card')
export class Card {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  supertype: string;

  @Column({ nullable: true })
  subtypes: string;

  @Column({ nullable: true })
  types: string;

  @Column({ nullable: true })
  number: number;

  @Column({ nullable: true })
  rarity: string;

  @ManyToOne(() => Set, (set) => set.cards)
  @JoinColumn({ name: 'set_id' })
  set: Set;
}
