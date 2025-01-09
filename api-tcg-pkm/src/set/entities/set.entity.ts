import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Card } from '../../card/entities/card.entity';

@Entity('set')
export class Set {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column()
  series: string;

  @Column({ nullable: true })
  printed_total: number;

  @Column()
  total: number;

  @Column({ nullable: true })
  ptcgo_code: string;

  @Column({ nullable: true })
  release_date: string;

  @Column({ nullable: true })
  updated_at: string;

  @Column()
  symbol_url: string;

  @Column()
  logo_url: string;

  @OneToMany(() => Card, (card) => card.set)
  cards: Card[];
}
