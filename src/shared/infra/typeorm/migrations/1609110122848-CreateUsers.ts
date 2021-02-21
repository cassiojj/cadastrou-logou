import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1609110122848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'role_id',
            type: 'int',
            default: '1',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['Pendente', 'Ativo', 'Inativo'],
          },
          {
            name: 'gender',
            type: 'enum',
            enum: ['M', 'F'],
            isNullable: true,
          },
          {
            name: 'birth',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'zip_code',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'street_address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'number',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'complement',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'emergency_contact',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'emergency_contact_phone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'goals_physical_activity',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sports_already_pratice',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'smoke',
            type: 'enum',
            enum: ['', 'S', 'N'],
          },
          {
            name: 'drink',
            type: 'enum',
            enum: ['', 'S', 'N'],
          },
          {
            name: 'any_restrictions_axercise',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'have_any_diseases',
            type: 'enum',
            enum: [
              'NENHUMA',
              'colesterol elevado',
              'diabetes tipo I',
              'diabetes tipo II',
              'hipertensão arterial',
              'cardiopatias',
            ],
          },
          {
            name: 'other_diseases',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'use_medicines',
            type: 'enum',
            enum: ['', 'S', 'N'],
          },
          {
            name: 'what_medicines',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'doctor_knows_exercise_program',
            type: 'enum',
            enum: ['', 'S', 'N', 'não frequento regularmente o médico'],
          },
          {
            name: 'best_time_5k',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'best_time_10k',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'best_time_21k',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'best_time_42k',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'goals_race',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'anamnese_question1',
            type: 'enum',
            enum: ['', 'S', 'N'],
            comment:
              'Seu médico já mencionou alguma vez que VOCÊ tem condição cardíaca e que VOCÊ só deve realizar atividade física recomendada por um médico?',
          },
          {
            name: 'anamnese_question2',
            type: 'enum',
            enum: ['', 'S', 'N'],
            comment:
              'VOCÊ sente dor no peito quando pratica atividades físicas?',
          },
          {
            name: 'anamnese_question3',
            type: 'enum',
            enum: ['', 'S', 'N'],
            comment:
              'No mês passado, VOCÊ teve DOR NO PEITO quando NÃO estava praticando atividade física?',
          },
          {
            name: 'anamnese_question4',
            type: 'enum',
            enum: ['', 'S', 'N'],
            comment:
              'VOCÊ já perdeu o EQUILÍBRIO por causa de tontura ou alguma vez perdeu a consciência?',
          },
          {
            name: 'anamnese_question5',
            type: 'enum',
            enum: ['', 'S', 'N'],
            comment:
              'VOCÊ tem algum problema ÓSSEO ou de ARTICULAÇÃO que poderia piorar em consequência de uma alteração em sua atividade física?',
          },
          {
            name: 'anamnese_question6',
            type: 'enum',
            enum: ['', 'S', 'N'],
            comment:
              'Seu médico está prescrevendo MEDICAMENTOS para sua pressão ou condição cardíaca?',
          },
          {
            name: 'anamnese_question7',
            type: 'enum',
            enum: ['', 'S', 'N'],
            comment:
              'VOCÊ conhece alguma outra razão que o IMPEÇA de realizar atividade física?',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
