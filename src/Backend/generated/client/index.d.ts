
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model pacientes
 * 
 */
export type pacientes = $Result.DefaultSelection<Prisma.$pacientesPayload>
/**
 * Model profissionais
 * 
 */
export type profissionais = $Result.DefaultSelection<Prisma.$profissionaisPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model avaliacoes
 * 
 */
export type avaliacoes = $Result.DefaultSelection<Prisma.$avaliacoesPayload>
/**
 * Model exercicios
 * 
 */
export type exercicios = $Result.DefaultSelection<Prisma.$exerciciosPayload>
/**
 * Model exericios_tags
 * 
 */
export type exericios_tags = $Result.DefaultSelection<Prisma.$exericios_tagsPayload>
/**
 * Model imagens_exercicios
 * 
 */
export type imagens_exercicios = $Result.DefaultSelection<Prisma.$imagens_exerciciosPayload>
/**
 * Model orientacoes
 * 
 */
export type orientacoes = $Result.DefaultSelection<Prisma.$orientacoesPayload>
/**
 * Model prontuarios
 * 
 */
export type prontuarios = $Result.DefaultSelection<Prisma.$prontuariosPayload>
/**
 * Model prontuarios_avaliacoes
 * 
 */
export type prontuarios_avaliacoes = $Result.DefaultSelection<Prisma.$prontuarios_avaliacoesPayload>
/**
 * Model prontuarios_exercicios
 * 
 */
export type prontuarios_exercicios = $Result.DefaultSelection<Prisma.$prontuarios_exerciciosPayload>
/**
 * Model prontuarios_queixas
 * 
 */
export type prontuarios_queixas = $Result.DefaultSelection<Prisma.$prontuarios_queixasPayload>
/**
 * Model prontuarios_sinais
 * 
 */
export type prontuarios_sinais = $Result.DefaultSelection<Prisma.$prontuarios_sinaisPayload>
/**
 * Model queixas
 * 
 */
export type queixas = $Result.DefaultSelection<Prisma.$queixasPayload>
/**
 * Model sinais
 * 
 */
export type sinais = $Result.DefaultSelection<Prisma.$sinaisPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const classificacao_usuario: {
  Muito_Grave: 'Muito_Grave',
  Grave: 'Grave',
  Moderado: 'Moderado',
  Leve: 'Leve',
  Muito_Leve: 'Muito_Leve'
};

export type classificacao_usuario = (typeof classificacao_usuario)[keyof typeof classificacao_usuario]

}

export type classificacao_usuario = $Enums.classificacao_usuario

export const classificacao_usuario: typeof $Enums.classificacao_usuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.pacientes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.pacientes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissionais`: Exposes CRUD operations for the **profissionais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionais
    * const profissionais = await prisma.profissionais.findMany()
    * ```
    */
  get profissionais(): Prisma.profissionaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacoes`: Exposes CRUD operations for the **avaliacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacoes
    * const avaliacoes = await prisma.avaliacoes.findMany()
    * ```
    */
  get avaliacoes(): Prisma.avaliacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercicios`: Exposes CRUD operations for the **exercicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercicios
    * const exercicios = await prisma.exercicios.findMany()
    * ```
    */
  get exercicios(): Prisma.exerciciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exericios_tags`: Exposes CRUD operations for the **exericios_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exericios_tags
    * const exericios_tags = await prisma.exericios_tags.findMany()
    * ```
    */
  get exericios_tags(): Prisma.exericios_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagens_exercicios`: Exposes CRUD operations for the **imagens_exercicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagens_exercicios
    * const imagens_exercicios = await prisma.imagens_exercicios.findMany()
    * ```
    */
  get imagens_exercicios(): Prisma.imagens_exerciciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orientacoes`: Exposes CRUD operations for the **orientacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orientacoes
    * const orientacoes = await prisma.orientacoes.findMany()
    * ```
    */
  get orientacoes(): Prisma.orientacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prontuarios`: Exposes CRUD operations for the **prontuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prontuarios
    * const prontuarios = await prisma.prontuarios.findMany()
    * ```
    */
  get prontuarios(): Prisma.prontuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prontuarios_avaliacoes`: Exposes CRUD operations for the **prontuarios_avaliacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prontuarios_avaliacoes
    * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.findMany()
    * ```
    */
  get prontuarios_avaliacoes(): Prisma.prontuarios_avaliacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prontuarios_exercicios`: Exposes CRUD operations for the **prontuarios_exercicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prontuarios_exercicios
    * const prontuarios_exercicios = await prisma.prontuarios_exercicios.findMany()
    * ```
    */
  get prontuarios_exercicios(): Prisma.prontuarios_exerciciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prontuarios_queixas`: Exposes CRUD operations for the **prontuarios_queixas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prontuarios_queixas
    * const prontuarios_queixas = await prisma.prontuarios_queixas.findMany()
    * ```
    */
  get prontuarios_queixas(): Prisma.prontuarios_queixasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prontuarios_sinais`: Exposes CRUD operations for the **prontuarios_sinais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prontuarios_sinais
    * const prontuarios_sinais = await prisma.prontuarios_sinais.findMany()
    * ```
    */
  get prontuarios_sinais(): Prisma.prontuarios_sinaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queixas`: Exposes CRUD operations for the **queixas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queixas
    * const queixas = await prisma.queixas.findMany()
    * ```
    */
  get queixas(): Prisma.queixasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sinais`: Exposes CRUD operations for the **sinais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sinais
    * const sinais = await prisma.sinais.findMany()
    * ```
    */
  get sinais(): Prisma.sinaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    pacientes: 'pacientes',
    profissionais: 'profissionais',
    usuarios: 'usuarios',
    avaliacoes: 'avaliacoes',
    exercicios: 'exercicios',
    exericios_tags: 'exericios_tags',
    imagens_exercicios: 'imagens_exercicios',
    orientacoes: 'orientacoes',
    prontuarios: 'prontuarios',
    prontuarios_avaliacoes: 'prontuarios_avaliacoes',
    prontuarios_exercicios: 'prontuarios_exercicios',
    prontuarios_queixas: 'prontuarios_queixas',
    prontuarios_sinais: 'prontuarios_sinais',
    queixas: 'queixas',
    sinais: 'sinais',
    tags: 'tags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pacientes" | "profissionais" | "usuarios" | "avaliacoes" | "exercicios" | "exericios_tags" | "imagens_exercicios" | "orientacoes" | "prontuarios" | "prontuarios_avaliacoes" | "prontuarios_exercicios" | "prontuarios_queixas" | "prontuarios_sinais" | "queixas" | "sinais" | "tags"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pacientes: {
        payload: Prisma.$pacientesPayload<ExtArgs>
        fields: Prisma.pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pacientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pacientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      profissionais: {
        payload: Prisma.$profissionaisPayload<ExtArgs>
        fields: Prisma.profissionaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profissionaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profissionaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          findFirst: {
            args: Prisma.profissionaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profissionaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          findMany: {
            args: Prisma.profissionaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>[]
          }
          create: {
            args: Prisma.profissionaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          createMany: {
            args: Prisma.profissionaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profissionaisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>[]
          }
          delete: {
            args: Prisma.profissionaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          update: {
            args: Prisma.profissionaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          deleteMany: {
            args: Prisma.profissionaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profissionaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profissionaisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>[]
          }
          upsert: {
            args: Prisma.profissionaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          aggregate: {
            args: Prisma.ProfissionaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissionais>
          }
          groupBy: {
            args: Prisma.profissionaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.profissionaisCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      avaliacoes: {
        payload: Prisma.$avaliacoesPayload<ExtArgs>
        fields: Prisma.avaliacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avaliacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avaliacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          findFirst: {
            args: Prisma.avaliacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avaliacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          findMany: {
            args: Prisma.avaliacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>[]
          }
          create: {
            args: Prisma.avaliacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          createMany: {
            args: Prisma.avaliacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.avaliacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>[]
          }
          delete: {
            args: Prisma.avaliacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          update: {
            args: Prisma.avaliacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          deleteMany: {
            args: Prisma.avaliacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avaliacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.avaliacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>[]
          }
          upsert: {
            args: Prisma.avaliacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacoesPayload>
          }
          aggregate: {
            args: Prisma.AvaliacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacoes>
          }
          groupBy: {
            args: Prisma.avaliacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.avaliacoesCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacoesCountAggregateOutputType> | number
          }
        }
      }
      exercicios: {
        payload: Prisma.$exerciciosPayload<ExtArgs>
        fields: Prisma.exerciciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exerciciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exerciciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          findFirst: {
            args: Prisma.exerciciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exerciciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          findMany: {
            args: Prisma.exerciciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>[]
          }
          create: {
            args: Prisma.exerciciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          createMany: {
            args: Prisma.exerciciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exerciciosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>[]
          }
          delete: {
            args: Prisma.exerciciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          update: {
            args: Prisma.exerciciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          deleteMany: {
            args: Prisma.exerciciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exerciciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exerciciosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>[]
          }
          upsert: {
            args: Prisma.exerciciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          aggregate: {
            args: Prisma.ExerciciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercicios>
          }
          groupBy: {
            args: Prisma.exerciciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.exerciciosCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciciosCountAggregateOutputType> | number
          }
        }
      }
      exericios_tags: {
        payload: Prisma.$exericios_tagsPayload<ExtArgs>
        fields: Prisma.exericios_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exericios_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exericios_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>
          }
          findFirst: {
            args: Prisma.exericios_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exericios_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>
          }
          findMany: {
            args: Prisma.exericios_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>[]
          }
          create: {
            args: Prisma.exericios_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>
          }
          createMany: {
            args: Prisma.exericios_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exericios_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>[]
          }
          delete: {
            args: Prisma.exericios_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>
          }
          update: {
            args: Prisma.exericios_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>
          }
          deleteMany: {
            args: Prisma.exericios_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exericios_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exericios_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>[]
          }
          upsert: {
            args: Prisma.exericios_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exericios_tagsPayload>
          }
          aggregate: {
            args: Prisma.Exericios_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExericios_tags>
          }
          groupBy: {
            args: Prisma.exericios_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Exericios_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.exericios_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Exericios_tagsCountAggregateOutputType> | number
          }
        }
      }
      imagens_exercicios: {
        payload: Prisma.$imagens_exerciciosPayload<ExtArgs>
        fields: Prisma.imagens_exerciciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagens_exerciciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagens_exerciciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>
          }
          findFirst: {
            args: Prisma.imagens_exerciciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagens_exerciciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>
          }
          findMany: {
            args: Prisma.imagens_exerciciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>[]
          }
          create: {
            args: Prisma.imagens_exerciciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>
          }
          createMany: {
            args: Prisma.imagens_exerciciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imagens_exerciciosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>[]
          }
          delete: {
            args: Prisma.imagens_exerciciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>
          }
          update: {
            args: Prisma.imagens_exerciciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>
          }
          deleteMany: {
            args: Prisma.imagens_exerciciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagens_exerciciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.imagens_exerciciosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>[]
          }
          upsert: {
            args: Prisma.imagens_exerciciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagens_exerciciosPayload>
          }
          aggregate: {
            args: Prisma.Imagens_exerciciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagens_exercicios>
          }
          groupBy: {
            args: Prisma.imagens_exerciciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Imagens_exerciciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.imagens_exerciciosCountArgs<ExtArgs>
            result: $Utils.Optional<Imagens_exerciciosCountAggregateOutputType> | number
          }
        }
      }
      orientacoes: {
        payload: Prisma.$orientacoesPayload<ExtArgs>
        fields: Prisma.orientacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orientacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orientacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>
          }
          findFirst: {
            args: Prisma.orientacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orientacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>
          }
          findMany: {
            args: Prisma.orientacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>[]
          }
          create: {
            args: Prisma.orientacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>
          }
          createMany: {
            args: Prisma.orientacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orientacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>[]
          }
          delete: {
            args: Prisma.orientacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>
          }
          update: {
            args: Prisma.orientacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>
          }
          deleteMany: {
            args: Prisma.orientacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orientacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orientacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>[]
          }
          upsert: {
            args: Prisma.orientacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orientacoesPayload>
          }
          aggregate: {
            args: Prisma.OrientacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrientacoes>
          }
          groupBy: {
            args: Prisma.orientacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrientacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.orientacoesCountArgs<ExtArgs>
            result: $Utils.Optional<OrientacoesCountAggregateOutputType> | number
          }
        }
      }
      prontuarios: {
        payload: Prisma.$prontuariosPayload<ExtArgs>
        fields: Prisma.prontuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prontuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prontuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>
          }
          findFirst: {
            args: Prisma.prontuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prontuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>
          }
          findMany: {
            args: Prisma.prontuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>[]
          }
          create: {
            args: Prisma.prontuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>
          }
          createMany: {
            args: Prisma.prontuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prontuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>[]
          }
          delete: {
            args: Prisma.prontuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>
          }
          update: {
            args: Prisma.prontuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>
          }
          deleteMany: {
            args: Prisma.prontuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prontuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prontuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>[]
          }
          upsert: {
            args: Prisma.prontuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuariosPayload>
          }
          aggregate: {
            args: Prisma.ProntuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProntuarios>
          }
          groupBy: {
            args: Prisma.prontuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProntuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.prontuariosCountArgs<ExtArgs>
            result: $Utils.Optional<ProntuariosCountAggregateOutputType> | number
          }
        }
      }
      prontuarios_avaliacoes: {
        payload: Prisma.$prontuarios_avaliacoesPayload<ExtArgs>
        fields: Prisma.prontuarios_avaliacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prontuarios_avaliacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prontuarios_avaliacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>
          }
          findFirst: {
            args: Prisma.prontuarios_avaliacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prontuarios_avaliacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>
          }
          findMany: {
            args: Prisma.prontuarios_avaliacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>[]
          }
          create: {
            args: Prisma.prontuarios_avaliacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>
          }
          createMany: {
            args: Prisma.prontuarios_avaliacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prontuarios_avaliacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>[]
          }
          delete: {
            args: Prisma.prontuarios_avaliacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>
          }
          update: {
            args: Prisma.prontuarios_avaliacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>
          }
          deleteMany: {
            args: Prisma.prontuarios_avaliacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prontuarios_avaliacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prontuarios_avaliacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>[]
          }
          upsert: {
            args: Prisma.prontuarios_avaliacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_avaliacoesPayload>
          }
          aggregate: {
            args: Prisma.Prontuarios_avaliacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProntuarios_avaliacoes>
          }
          groupBy: {
            args: Prisma.prontuarios_avaliacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_avaliacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.prontuarios_avaliacoesCountArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_avaliacoesCountAggregateOutputType> | number
          }
        }
      }
      prontuarios_exercicios: {
        payload: Prisma.$prontuarios_exerciciosPayload<ExtArgs>
        fields: Prisma.prontuarios_exerciciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prontuarios_exerciciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prontuarios_exerciciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>
          }
          findFirst: {
            args: Prisma.prontuarios_exerciciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prontuarios_exerciciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>
          }
          findMany: {
            args: Prisma.prontuarios_exerciciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>[]
          }
          create: {
            args: Prisma.prontuarios_exerciciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>
          }
          createMany: {
            args: Prisma.prontuarios_exerciciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prontuarios_exerciciosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>[]
          }
          delete: {
            args: Prisma.prontuarios_exerciciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>
          }
          update: {
            args: Prisma.prontuarios_exerciciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>
          }
          deleteMany: {
            args: Prisma.prontuarios_exerciciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prontuarios_exerciciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prontuarios_exerciciosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>[]
          }
          upsert: {
            args: Prisma.prontuarios_exerciciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_exerciciosPayload>
          }
          aggregate: {
            args: Prisma.Prontuarios_exerciciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProntuarios_exercicios>
          }
          groupBy: {
            args: Prisma.prontuarios_exerciciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_exerciciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.prontuarios_exerciciosCountArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_exerciciosCountAggregateOutputType> | number
          }
        }
      }
      prontuarios_queixas: {
        payload: Prisma.$prontuarios_queixasPayload<ExtArgs>
        fields: Prisma.prontuarios_queixasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prontuarios_queixasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prontuarios_queixasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>
          }
          findFirst: {
            args: Prisma.prontuarios_queixasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prontuarios_queixasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>
          }
          findMany: {
            args: Prisma.prontuarios_queixasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>[]
          }
          create: {
            args: Prisma.prontuarios_queixasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>
          }
          createMany: {
            args: Prisma.prontuarios_queixasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prontuarios_queixasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>[]
          }
          delete: {
            args: Prisma.prontuarios_queixasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>
          }
          update: {
            args: Prisma.prontuarios_queixasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>
          }
          deleteMany: {
            args: Prisma.prontuarios_queixasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prontuarios_queixasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prontuarios_queixasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>[]
          }
          upsert: {
            args: Prisma.prontuarios_queixasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_queixasPayload>
          }
          aggregate: {
            args: Prisma.Prontuarios_queixasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProntuarios_queixas>
          }
          groupBy: {
            args: Prisma.prontuarios_queixasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_queixasGroupByOutputType>[]
          }
          count: {
            args: Prisma.prontuarios_queixasCountArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_queixasCountAggregateOutputType> | number
          }
        }
      }
      prontuarios_sinais: {
        payload: Prisma.$prontuarios_sinaisPayload<ExtArgs>
        fields: Prisma.prontuarios_sinaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prontuarios_sinaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prontuarios_sinaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>
          }
          findFirst: {
            args: Prisma.prontuarios_sinaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prontuarios_sinaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>
          }
          findMany: {
            args: Prisma.prontuarios_sinaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>[]
          }
          create: {
            args: Prisma.prontuarios_sinaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>
          }
          createMany: {
            args: Prisma.prontuarios_sinaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prontuarios_sinaisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>[]
          }
          delete: {
            args: Prisma.prontuarios_sinaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>
          }
          update: {
            args: Prisma.prontuarios_sinaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>
          }
          deleteMany: {
            args: Prisma.prontuarios_sinaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prontuarios_sinaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prontuarios_sinaisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>[]
          }
          upsert: {
            args: Prisma.prontuarios_sinaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prontuarios_sinaisPayload>
          }
          aggregate: {
            args: Prisma.Prontuarios_sinaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProntuarios_sinais>
          }
          groupBy: {
            args: Prisma.prontuarios_sinaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_sinaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.prontuarios_sinaisCountArgs<ExtArgs>
            result: $Utils.Optional<Prontuarios_sinaisCountAggregateOutputType> | number
          }
        }
      }
      queixas: {
        payload: Prisma.$queixasPayload<ExtArgs>
        fields: Prisma.queixasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.queixasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.queixasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>
          }
          findFirst: {
            args: Prisma.queixasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.queixasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>
          }
          findMany: {
            args: Prisma.queixasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>[]
          }
          create: {
            args: Prisma.queixasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>
          }
          createMany: {
            args: Prisma.queixasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.queixasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>[]
          }
          delete: {
            args: Prisma.queixasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>
          }
          update: {
            args: Prisma.queixasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>
          }
          deleteMany: {
            args: Prisma.queixasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.queixasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.queixasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>[]
          }
          upsert: {
            args: Prisma.queixasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$queixasPayload>
          }
          aggregate: {
            args: Prisma.QueixasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueixas>
          }
          groupBy: {
            args: Prisma.queixasGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueixasGroupByOutputType>[]
          }
          count: {
            args: Prisma.queixasCountArgs<ExtArgs>
            result: $Utils.Optional<QueixasCountAggregateOutputType> | number
          }
        }
      }
      sinais: {
        payload: Prisma.$sinaisPayload<ExtArgs>
        fields: Prisma.sinaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sinaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sinaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>
          }
          findFirst: {
            args: Prisma.sinaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sinaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>
          }
          findMany: {
            args: Prisma.sinaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>[]
          }
          create: {
            args: Prisma.sinaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>
          }
          createMany: {
            args: Prisma.sinaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sinaisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>[]
          }
          delete: {
            args: Prisma.sinaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>
          }
          update: {
            args: Prisma.sinaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>
          }
          deleteMany: {
            args: Prisma.sinaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sinaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sinaisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>[]
          }
          upsert: {
            args: Prisma.sinaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sinaisPayload>
          }
          aggregate: {
            args: Prisma.SinaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSinais>
          }
          groupBy: {
            args: Prisma.sinaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<SinaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.sinaisCountArgs<ExtArgs>
            result: $Utils.Optional<SinaisCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    pacientes?: pacientesOmit
    profissionais?: profissionaisOmit
    usuarios?: usuariosOmit
    avaliacoes?: avaliacoesOmit
    exercicios?: exerciciosOmit
    exericios_tags?: exericios_tagsOmit
    imagens_exercicios?: imagens_exerciciosOmit
    orientacoes?: orientacoesOmit
    prontuarios?: prontuariosOmit
    prontuarios_avaliacoes?: prontuarios_avaliacoesOmit
    prontuarios_exercicios?: prontuarios_exerciciosOmit
    prontuarios_queixas?: prontuarios_queixasOmit
    prontuarios_sinais?: prontuarios_sinaisOmit
    queixas?: queixasOmit
    sinais?: sinaisOmit
    tags?: tagsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PacientesCountOutputType
   */

  export type PacientesCountOutputType = {
    prontuarios: number
  }

  export type PacientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | PacientesCountOutputTypeCountProntuariosArgs
  }

  // Custom InputTypes
  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacientesCountOutputType
     */
    select?: PacientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountProntuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuariosWhereInput
  }


  /**
   * Count Type AvaliacoesCountOutputType
   */

  export type AvaliacoesCountOutputType = {
    prontuarios_avaliacoes: number
  }

  export type AvaliacoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios_avaliacoes?: boolean | AvaliacoesCountOutputTypeCountProntuarios_avaliacoesArgs
  }

  // Custom InputTypes
  /**
   * AvaliacoesCountOutputType without action
   */
  export type AvaliacoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvaliacoesCountOutputType
     */
    select?: AvaliacoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvaliacoesCountOutputType without action
   */
  export type AvaliacoesCountOutputTypeCountProntuarios_avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_avaliacoesWhereInput
  }


  /**
   * Count Type ExerciciosCountOutputType
   */

  export type ExerciciosCountOutputType = {
    exericios_tags: number
    imagens_exercicios: number
    prontuarios_exercicios: number
  }

  export type ExerciciosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exericios_tags?: boolean | ExerciciosCountOutputTypeCountExericios_tagsArgs
    imagens_exercicios?: boolean | ExerciciosCountOutputTypeCountImagens_exerciciosArgs
    prontuarios_exercicios?: boolean | ExerciciosCountOutputTypeCountProntuarios_exerciciosArgs
  }

  // Custom InputTypes
  /**
   * ExerciciosCountOutputType without action
   */
  export type ExerciciosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciciosCountOutputType
     */
    select?: ExerciciosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciciosCountOutputType without action
   */
  export type ExerciciosCountOutputTypeCountExericios_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exericios_tagsWhereInput
  }

  /**
   * ExerciciosCountOutputType without action
   */
  export type ExerciciosCountOutputTypeCountImagens_exerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagens_exerciciosWhereInput
  }

  /**
   * ExerciciosCountOutputType without action
   */
  export type ExerciciosCountOutputTypeCountProntuarios_exerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_exerciciosWhereInput
  }


  /**
   * Count Type ProntuariosCountOutputType
   */

  export type ProntuariosCountOutputType = {
    orientacoes: number
    prontuarios_avaliacoes: number
    prontuarios_exercicios: number
    prontuarios_queixas: number
    prontuarios_sinais: number
  }

  export type ProntuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orientacoes?: boolean | ProntuariosCountOutputTypeCountOrientacoesArgs
    prontuarios_avaliacoes?: boolean | ProntuariosCountOutputTypeCountProntuarios_avaliacoesArgs
    prontuarios_exercicios?: boolean | ProntuariosCountOutputTypeCountProntuarios_exerciciosArgs
    prontuarios_queixas?: boolean | ProntuariosCountOutputTypeCountProntuarios_queixasArgs
    prontuarios_sinais?: boolean | ProntuariosCountOutputTypeCountProntuarios_sinaisArgs
  }

  // Custom InputTypes
  /**
   * ProntuariosCountOutputType without action
   */
  export type ProntuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProntuariosCountOutputType
     */
    select?: ProntuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProntuariosCountOutputType without action
   */
  export type ProntuariosCountOutputTypeCountOrientacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orientacoesWhereInput
  }

  /**
   * ProntuariosCountOutputType without action
   */
  export type ProntuariosCountOutputTypeCountProntuarios_avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_avaliacoesWhereInput
  }

  /**
   * ProntuariosCountOutputType without action
   */
  export type ProntuariosCountOutputTypeCountProntuarios_exerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_exerciciosWhereInput
  }

  /**
   * ProntuariosCountOutputType without action
   */
  export type ProntuariosCountOutputTypeCountProntuarios_queixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_queixasWhereInput
  }

  /**
   * ProntuariosCountOutputType without action
   */
  export type ProntuariosCountOutputTypeCountProntuarios_sinaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_sinaisWhereInput
  }


  /**
   * Count Type QueixasCountOutputType
   */

  export type QueixasCountOutputType = {
    prontuarios_queixas: number
  }

  export type QueixasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios_queixas?: boolean | QueixasCountOutputTypeCountProntuarios_queixasArgs
  }

  // Custom InputTypes
  /**
   * QueixasCountOutputType without action
   */
  export type QueixasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueixasCountOutputType
     */
    select?: QueixasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QueixasCountOutputType without action
   */
  export type QueixasCountOutputTypeCountProntuarios_queixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_queixasWhereInput
  }


  /**
   * Count Type SinaisCountOutputType
   */

  export type SinaisCountOutputType = {
    prontuarios_sinais: number
  }

  export type SinaisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios_sinais?: boolean | SinaisCountOutputTypeCountProntuarios_sinaisArgs
  }

  // Custom InputTypes
  /**
   * SinaisCountOutputType without action
   */
  export type SinaisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SinaisCountOutputType
     */
    select?: SinaisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SinaisCountOutputType without action
   */
  export type SinaisCountOutputTypeCountProntuarios_sinaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_sinaisWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    exericios_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exericios_tags?: boolean | TagsCountOutputTypeCountExericios_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountExericios_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exericios_tagsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    id_paciente: number | null
  }

  export type PacientesSumAggregateOutputType = {
    id_paciente: number | null
  }

  export type PacientesMinAggregateOutputType = {
    id_paciente: number | null
    is_ativo: boolean | null
    primeiro_acesso: boolean | null
  }

  export type PacientesMaxAggregateOutputType = {
    id_paciente: number | null
    is_ativo: boolean | null
    primeiro_acesso: boolean | null
  }

  export type PacientesCountAggregateOutputType = {
    id_paciente: number
    is_ativo: number
    primeiro_acesso: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    id_paciente?: true
  }

  export type PacientesSumAggregateInputType = {
    id_paciente?: true
  }

  export type PacientesMinAggregateInputType = {
    id_paciente?: true
    is_ativo?: true
    primeiro_acesso?: true
  }

  export type PacientesMaxAggregateInputType = {
    id_paciente?: true
    is_ativo?: true
    primeiro_acesso?: true
  }

  export type PacientesCountAggregateInputType = {
    id_paciente?: true
    is_ativo?: true
    primeiro_acesso?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    id_paciente: number
    is_ativo: boolean
    primeiro_acesso: boolean
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    prontuarios?: boolean | pacientes$prontuariosArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectScalar = {
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
  }

  export type pacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_paciente" | "is_ativo" | "primeiro_acesso", ExtArgs["result"]["pacientes"]>
  export type pacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    prontuarios?: boolean | pacientes$prontuariosArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pacientes"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      prontuarios: Prisma.$prontuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_paciente: number
      is_ativo: boolean
      primeiro_acesso: boolean
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = $Result.GetResult<Prisma.$pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pacientesFindUniqueArgs>(args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pacientesFindFirstArgs>(args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `id_paciente`
     * const pacientesWithId_pacienteOnly = await prisma.pacientes.findMany({ select: { id_paciente: true } })
     * 
     */
    findMany<T extends pacientesFindManyArgs>(args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends pacientesCreateArgs>(args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pacientesCreateManyArgs>(args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {pacientesCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id_paciente`
     * const pacientesWithId_pacienteOnly = await prisma.pacientes.createManyAndReturn({
     *   select: { id_paciente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pacientesCreateManyAndReturnArgs>(args?: SelectSubset<T, pacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends pacientesDeleteArgs>(args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pacientesUpdateArgs>(args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pacientesDeleteManyArgs>(args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pacientesUpdateManyArgs>(args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {pacientesUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id_paciente`
     * const pacientesWithId_pacienteOnly = await prisma.pacientes.updateManyAndReturn({
     *   select: { id_paciente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pacientesUpdateManyAndReturnArgs>(args: SelectSubset<T, pacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends pacientesUpsertArgs>(args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pacientes model
   */
  readonly fields: pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prontuarios<T extends pacientes$prontuariosArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$prontuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pacientes model
   */
  interface pacientesFieldRefs {
    readonly id_paciente: FieldRef<"pacientes", 'Int'>
    readonly is_ativo: FieldRef<"pacientes", 'Boolean'>
    readonly primeiro_acesso: FieldRef<"pacientes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * pacientes findUnique
   */
  export type pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findFirst
   */
  export type pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }

  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pacientes createManyAndReturn
   */
  export type pacientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
  }

  /**
   * pacientes updateManyAndReturn
   */
  export type pacientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }

  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to delete.
     */
    limit?: number
  }

  /**
   * pacientes.prontuarios
   */
  export type pacientes$prontuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    where?: prontuariosWhereInput
    orderBy?: prontuariosOrderByWithRelationInput | prontuariosOrderByWithRelationInput[]
    cursor?: prontuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProntuariosScalarFieldEnum | ProntuariosScalarFieldEnum[]
  }

  /**
   * pacientes without action
   */
  export type pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
  }


  /**
   * Model profissionais
   */

  export type AggregateProfissionais = {
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  export type ProfissionaisAvgAggregateOutputType = {
    id_profissional: number | null
  }

  export type ProfissionaisSumAggregateOutputType = {
    id_profissional: number | null
  }

  export type ProfissionaisMinAggregateOutputType = {
    id_profissional: number | null
    crm: string | null
    hash_palavra_chave: string | null
  }

  export type ProfissionaisMaxAggregateOutputType = {
    id_profissional: number | null
    crm: string | null
    hash_palavra_chave: string | null
  }

  export type ProfissionaisCountAggregateOutputType = {
    id_profissional: number
    crm: number
    hash_palavra_chave: number
    _all: number
  }


  export type ProfissionaisAvgAggregateInputType = {
    id_profissional?: true
  }

  export type ProfissionaisSumAggregateInputType = {
    id_profissional?: true
  }

  export type ProfissionaisMinAggregateInputType = {
    id_profissional?: true
    crm?: true
    hash_palavra_chave?: true
  }

  export type ProfissionaisMaxAggregateInputType = {
    id_profissional?: true
    crm?: true
    hash_palavra_chave?: true
  }

  export type ProfissionaisCountAggregateInputType = {
    id_profissional?: true
    crm?: true
    hash_palavra_chave?: true
    _all?: true
  }

  export type ProfissionaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissionais to aggregate.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profissionais
    **/
    _count?: true | ProfissionaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfissionaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfissionaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type GetProfissionaisAggregateType<T extends ProfissionaisAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissionais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissionais[P]>
      : GetScalarType<T[P], AggregateProfissionais[P]>
  }




  export type profissionaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissionaisWhereInput
    orderBy?: profissionaisOrderByWithAggregationInput | profissionaisOrderByWithAggregationInput[]
    by: ProfissionaisScalarFieldEnum[] | ProfissionaisScalarFieldEnum
    having?: profissionaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionaisCountAggregateInputType | true
    _avg?: ProfissionaisAvgAggregateInputType
    _sum?: ProfissionaisSumAggregateInputType
    _min?: ProfissionaisMinAggregateInputType
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type ProfissionaisGroupByOutputType = {
    id_profissional: number
    crm: string
    hash_palavra_chave: string
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  type GetProfissionaisGroupByPayload<T extends profissionaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
        }
      >
    >


  export type profissionaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profissional?: boolean
    crm?: boolean
    hash_palavra_chave?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>

  export type profissionaisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profissional?: boolean
    crm?: boolean
    hash_palavra_chave?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>

  export type profissionaisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profissional?: boolean
    crm?: boolean
    hash_palavra_chave?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>

  export type profissionaisSelectScalar = {
    id_profissional?: boolean
    crm?: boolean
    hash_palavra_chave?: boolean
  }

  export type profissionaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profissional" | "crm" | "hash_palavra_chave", ExtArgs["result"]["profissionais"]>
  export type profissionaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type profissionaisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type profissionaisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $profissionaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profissionais"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profissional: number
      crm: string
      hash_palavra_chave: string
    }, ExtArgs["result"]["profissionais"]>
    composites: {}
  }

  type profissionaisGetPayload<S extends boolean | null | undefined | profissionaisDefaultArgs> = $Result.GetResult<Prisma.$profissionaisPayload, S>

  type profissionaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profissionaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionaisCountAggregateInputType | true
    }

  export interface profissionaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profissionais'], meta: { name: 'profissionais' } }
    /**
     * Find zero or one Profissionais that matches the filter.
     * @param {profissionaisFindUniqueArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profissionaisFindUniqueArgs>(args: SelectSubset<T, profissionaisFindUniqueArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissionais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profissionaisFindUniqueOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profissionaisFindUniqueOrThrowArgs>(args: SelectSubset<T, profissionaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindFirstArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profissionaisFindFirstArgs>(args?: SelectSubset<T, profissionaisFindFirstArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindFirstOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profissionaisFindFirstOrThrowArgs>(args?: SelectSubset<T, profissionaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionais
     * const profissionais = await prisma.profissionais.findMany()
     * 
     * // Get first 10 Profissionais
     * const profissionais = await prisma.profissionais.findMany({ take: 10 })
     * 
     * // Only select the `id_profissional`
     * const profissionaisWithId_profissionalOnly = await prisma.profissionais.findMany({ select: { id_profissional: true } })
     * 
     */
    findMany<T extends profissionaisFindManyArgs>(args?: SelectSubset<T, profissionaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissionais.
     * @param {profissionaisCreateArgs} args - Arguments to create a Profissionais.
     * @example
     * // Create one Profissionais
     * const Profissionais = await prisma.profissionais.create({
     *   data: {
     *     // ... data to create a Profissionais
     *   }
     * })
     * 
     */
    create<T extends profissionaisCreateArgs>(args: SelectSubset<T, profissionaisCreateArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionais.
     * @param {profissionaisCreateManyArgs} args - Arguments to create many Profissionais.
     * @example
     * // Create many Profissionais
     * const profissionais = await prisma.profissionais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profissionaisCreateManyArgs>(args?: SelectSubset<T, profissionaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profissionais and returns the data saved in the database.
     * @param {profissionaisCreateManyAndReturnArgs} args - Arguments to create many Profissionais.
     * @example
     * // Create many Profissionais
     * const profissionais = await prisma.profissionais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profissionais and only return the `id_profissional`
     * const profissionaisWithId_profissionalOnly = await prisma.profissionais.createManyAndReturn({
     *   select: { id_profissional: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profissionaisCreateManyAndReturnArgs>(args?: SelectSubset<T, profissionaisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profissionais.
     * @param {profissionaisDeleteArgs} args - Arguments to delete one Profissionais.
     * @example
     * // Delete one Profissionais
     * const Profissionais = await prisma.profissionais.delete({
     *   where: {
     *     // ... filter to delete one Profissionais
     *   }
     * })
     * 
     */
    delete<T extends profissionaisDeleteArgs>(args: SelectSubset<T, profissionaisDeleteArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissionais.
     * @param {profissionaisUpdateArgs} args - Arguments to update one Profissionais.
     * @example
     * // Update one Profissionais
     * const profissionais = await prisma.profissionais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profissionaisUpdateArgs>(args: SelectSubset<T, profissionaisUpdateArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionais.
     * @param {profissionaisDeleteManyArgs} args - Arguments to filter Profissionais to delete.
     * @example
     * // Delete a few Profissionais
     * const { count } = await prisma.profissionais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profissionaisDeleteManyArgs>(args?: SelectSubset<T, profissionaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionais
     * const profissionais = await prisma.profissionais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profissionaisUpdateManyArgs>(args: SelectSubset<T, profissionaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionais and returns the data updated in the database.
     * @param {profissionaisUpdateManyAndReturnArgs} args - Arguments to update many Profissionais.
     * @example
     * // Update many Profissionais
     * const profissionais = await prisma.profissionais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profissionais and only return the `id_profissional`
     * const profissionaisWithId_profissionalOnly = await prisma.profissionais.updateManyAndReturn({
     *   select: { id_profissional: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profissionaisUpdateManyAndReturnArgs>(args: SelectSubset<T, profissionaisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profissionais.
     * @param {profissionaisUpsertArgs} args - Arguments to update or create a Profissionais.
     * @example
     * // Update or create a Profissionais
     * const profissionais = await prisma.profissionais.upsert({
     *   create: {
     *     // ... data to create a Profissionais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissionais we want to update
     *   }
     * })
     */
    upsert<T extends profissionaisUpsertArgs>(args: SelectSubset<T, profissionaisUpsertArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisCountArgs} args - Arguments to filter Profissionais to count.
     * @example
     * // Count the number of Profissionais
     * const count = await prisma.profissionais.count({
     *   where: {
     *     // ... the filter for the Profissionais we want to count
     *   }
     * })
    **/
    count<T extends profissionaisCountArgs>(
      args?: Subset<T, profissionaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfissionaisAggregateArgs>(args: Subset<T, ProfissionaisAggregateArgs>): Prisma.PrismaPromise<GetProfissionaisAggregateType<T>>

    /**
     * Group by Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profissionaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profissionaisGroupByArgs['orderBy'] }
        : { orderBy?: profissionaisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profissionaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profissionais model
   */
  readonly fields: profissionaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profissionais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profissionaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profissionais model
   */
  interface profissionaisFieldRefs {
    readonly id_profissional: FieldRef<"profissionais", 'Int'>
    readonly crm: FieldRef<"profissionais", 'String'>
    readonly hash_palavra_chave: FieldRef<"profissionais", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profissionais findUnique
   */
  export type profissionaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais findUniqueOrThrow
   */
  export type profissionaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais findFirst
   */
  export type profissionaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais findFirstOrThrow
   */
  export type profissionaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais findMany
   */
  export type profissionaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais create
   */
  export type profissionaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The data needed to create a profissionais.
     */
    data: XOR<profissionaisCreateInput, profissionaisUncheckedCreateInput>
  }

  /**
   * profissionais createMany
   */
  export type profissionaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profissionais.
     */
    data: profissionaisCreateManyInput | profissionaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profissionais createManyAndReturn
   */
  export type profissionaisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * The data used to create many profissionais.
     */
    data: profissionaisCreateManyInput | profissionaisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profissionais update
   */
  export type profissionaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The data needed to update a profissionais.
     */
    data: XOR<profissionaisUpdateInput, profissionaisUncheckedUpdateInput>
    /**
     * Choose, which profissionais to update.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais updateMany
   */
  export type profissionaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profissionais.
     */
    data: XOR<profissionaisUpdateManyMutationInput, profissionaisUncheckedUpdateManyInput>
    /**
     * Filter which profissionais to update
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to update.
     */
    limit?: number
  }

  /**
   * profissionais updateManyAndReturn
   */
  export type profissionaisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * The data used to update profissionais.
     */
    data: XOR<profissionaisUpdateManyMutationInput, profissionaisUncheckedUpdateManyInput>
    /**
     * Filter which profissionais to update
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profissionais upsert
   */
  export type profissionaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The filter to search for the profissionais to update in case it exists.
     */
    where: profissionaisWhereUniqueInput
    /**
     * In case the profissionais found by the `where` argument doesn't exist, create a new profissionais with this data.
     */
    create: XOR<profissionaisCreateInput, profissionaisUncheckedCreateInput>
    /**
     * In case the profissionais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profissionaisUpdateInput, profissionaisUncheckedUpdateInput>
  }

  /**
   * profissionais delete
   */
  export type profissionaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter which profissionais to delete.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais deleteMany
   */
  export type profissionaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissionais to delete
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to delete.
     */
    limit?: number
  }

  /**
   * profissionais without action
   */
  export type profissionaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    hash_senha: string | null
    data_nascimento: Date | null
    telefone: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    hash_senha: string | null
    data_nascimento: Date | null
    telefone: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nome: number
    email: number
    hash_senha: number
    data_nascimento: number
    telefone: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    hash_senha?: true
    data_nascimento?: true
    telefone?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    hash_senha?: true
    data_nascimento?: true
    telefone?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    hash_senha?: true
    data_nascimento?: true
    telefone?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date
    telefone: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    profissionais?: boolean | usuarios$profissionaisArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome" | "email" | "hash_senha" | "data_nascimento" | "telefone", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    profissionais?: boolean | usuarios$profissionaisArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
      profissionais: Prisma.$profissionaisPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nome: string
      email: string
      hash_senha: string
      data_nascimento: Date
      telefone: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends usuarios$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profissionais<T extends usuarios$profissionaisArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$profissionaisArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly hash_senha: FieldRef<"usuarios", 'String'>
    readonly data_nascimento: FieldRef<"usuarios", 'DateTime'>
    readonly telefone: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.pacientes
   */
  export type usuarios$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * usuarios.profissionais
   */
  export type usuarios$profissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    where?: profissionaisWhereInput
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model avaliacoes
   */

  export type AggregateAvaliacoes = {
    _count: AvaliacoesCountAggregateOutputType | null
    _avg: AvaliacoesAvgAggregateOutputType | null
    _sum: AvaliacoesSumAggregateOutputType | null
    _min: AvaliacoesMinAggregateOutputType | null
    _max: AvaliacoesMaxAggregateOutputType | null
  }

  export type AvaliacoesAvgAggregateOutputType = {
    id_avaliacao: number | null
  }

  export type AvaliacoesSumAggregateOutputType = {
    id_avaliacao: number | null
  }

  export type AvaliacoesMinAggregateOutputType = {
    id_avaliacao: number | null
    avaliacao: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacoesMaxAggregateOutputType = {
    id_avaliacao: number | null
    avaliacao: string | null
    data_avaliacao: Date | null
  }

  export type AvaliacoesCountAggregateOutputType = {
    id_avaliacao: number
    avaliacao: number
    data_avaliacao: number
    _all: number
  }


  export type AvaliacoesAvgAggregateInputType = {
    id_avaliacao?: true
  }

  export type AvaliacoesSumAggregateInputType = {
    id_avaliacao?: true
  }

  export type AvaliacoesMinAggregateInputType = {
    id_avaliacao?: true
    avaliacao?: true
    data_avaliacao?: true
  }

  export type AvaliacoesMaxAggregateInputType = {
    id_avaliacao?: true
    avaliacao?: true
    data_avaliacao?: true
  }

  export type AvaliacoesCountAggregateInputType = {
    id_avaliacao?: true
    avaliacao?: true
    data_avaliacao?: true
    _all?: true
  }

  export type AvaliacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacoes to aggregate.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avaliacoes
    **/
    _count?: true | AvaliacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacoesMaxAggregateInputType
  }

  export type GetAvaliacoesAggregateType<T extends AvaliacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacoes[P]>
      : GetScalarType<T[P], AggregateAvaliacoes[P]>
  }




  export type avaliacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacoesWhereInput
    orderBy?: avaliacoesOrderByWithAggregationInput | avaliacoesOrderByWithAggregationInput[]
    by: AvaliacoesScalarFieldEnum[] | AvaliacoesScalarFieldEnum
    having?: avaliacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacoesCountAggregateInputType | true
    _avg?: AvaliacoesAvgAggregateInputType
    _sum?: AvaliacoesSumAggregateInputType
    _min?: AvaliacoesMinAggregateInputType
    _max?: AvaliacoesMaxAggregateInputType
  }

  export type AvaliacoesGroupByOutputType = {
    id_avaliacao: number
    avaliacao: string
    data_avaliacao: Date
    _count: AvaliacoesCountAggregateOutputType | null
    _avg: AvaliacoesAvgAggregateOutputType | null
    _sum: AvaliacoesSumAggregateOutputType | null
    _min: AvaliacoesMinAggregateOutputType | null
    _max: AvaliacoesMaxAggregateOutputType | null
  }

  type GetAvaliacoesGroupByPayload<T extends avaliacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacoesGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacoesGroupByOutputType[P]>
        }
      >
    >


  export type avaliacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    avaliacao?: boolean
    data_avaliacao?: boolean
    prontuarios_avaliacoes?: boolean | avaliacoes$prontuarios_avaliacoesArgs<ExtArgs>
    _count?: boolean | AvaliacoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacoes"]>

  export type avaliacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    avaliacao?: boolean
    data_avaliacao?: boolean
  }, ExtArgs["result"]["avaliacoes"]>

  export type avaliacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_avaliacao?: boolean
    avaliacao?: boolean
    data_avaliacao?: boolean
  }, ExtArgs["result"]["avaliacoes"]>

  export type avaliacoesSelectScalar = {
    id_avaliacao?: boolean
    avaliacao?: boolean
    data_avaliacao?: boolean
  }

  export type avaliacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_avaliacao" | "avaliacao" | "data_avaliacao", ExtArgs["result"]["avaliacoes"]>
  export type avaliacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios_avaliacoes?: boolean | avaliacoes$prontuarios_avaliacoesArgs<ExtArgs>
    _count?: boolean | AvaliacoesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type avaliacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type avaliacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $avaliacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avaliacoes"
    objects: {
      prontuarios_avaliacoes: Prisma.$prontuarios_avaliacoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_avaliacao: number
      avaliacao: string
      data_avaliacao: Date
    }, ExtArgs["result"]["avaliacoes"]>
    composites: {}
  }

  type avaliacoesGetPayload<S extends boolean | null | undefined | avaliacoesDefaultArgs> = $Result.GetResult<Prisma.$avaliacoesPayload, S>

  type avaliacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<avaliacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacoesCountAggregateInputType | true
    }

  export interface avaliacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avaliacoes'], meta: { name: 'avaliacoes' } }
    /**
     * Find zero or one Avaliacoes that matches the filter.
     * @param {avaliacoesFindUniqueArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avaliacoesFindUniqueArgs>(args: SelectSubset<T, avaliacoesFindUniqueArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {avaliacoesFindUniqueOrThrowArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avaliacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, avaliacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesFindFirstArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avaliacoesFindFirstArgs>(args?: SelectSubset<T, avaliacoesFindFirstArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesFindFirstOrThrowArgs} args - Arguments to find a Avaliacoes
     * @example
     * // Get one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avaliacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, avaliacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findMany()
     * 
     * // Get first 10 Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.findMany({ take: 10 })
     * 
     * // Only select the `id_avaliacao`
     * const avaliacoesWithId_avaliacaoOnly = await prisma.avaliacoes.findMany({ select: { id_avaliacao: true } })
     * 
     */
    findMany<T extends avaliacoesFindManyArgs>(args?: SelectSubset<T, avaliacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacoes.
     * @param {avaliacoesCreateArgs} args - Arguments to create a Avaliacoes.
     * @example
     * // Create one Avaliacoes
     * const Avaliacoes = await prisma.avaliacoes.create({
     *   data: {
     *     // ... data to create a Avaliacoes
     *   }
     * })
     * 
     */
    create<T extends avaliacoesCreateArgs>(args: SelectSubset<T, avaliacoesCreateArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacoes.
     * @param {avaliacoesCreateManyArgs} args - Arguments to create many Avaliacoes.
     * @example
     * // Create many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avaliacoesCreateManyArgs>(args?: SelectSubset<T, avaliacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacoes and returns the data saved in the database.
     * @param {avaliacoesCreateManyAndReturnArgs} args - Arguments to create many Avaliacoes.
     * @example
     * // Create many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacoes and only return the `id_avaliacao`
     * const avaliacoesWithId_avaliacaoOnly = await prisma.avaliacoes.createManyAndReturn({
     *   select: { id_avaliacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends avaliacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, avaliacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacoes.
     * @param {avaliacoesDeleteArgs} args - Arguments to delete one Avaliacoes.
     * @example
     * // Delete one Avaliacoes
     * const Avaliacoes = await prisma.avaliacoes.delete({
     *   where: {
     *     // ... filter to delete one Avaliacoes
     *   }
     * })
     * 
     */
    delete<T extends avaliacoesDeleteArgs>(args: SelectSubset<T, avaliacoesDeleteArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacoes.
     * @param {avaliacoesUpdateArgs} args - Arguments to update one Avaliacoes.
     * @example
     * // Update one Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avaliacoesUpdateArgs>(args: SelectSubset<T, avaliacoesUpdateArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacoes.
     * @param {avaliacoesDeleteManyArgs} args - Arguments to filter Avaliacoes to delete.
     * @example
     * // Delete a few Avaliacoes
     * const { count } = await prisma.avaliacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avaliacoesDeleteManyArgs>(args?: SelectSubset<T, avaliacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avaliacoesUpdateManyArgs>(args: SelectSubset<T, avaliacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacoes and returns the data updated in the database.
     * @param {avaliacoesUpdateManyAndReturnArgs} args - Arguments to update many Avaliacoes.
     * @example
     * // Update many Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacoes and only return the `id_avaliacao`
     * const avaliacoesWithId_avaliacaoOnly = await prisma.avaliacoes.updateManyAndReturn({
     *   select: { id_avaliacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends avaliacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, avaliacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacoes.
     * @param {avaliacoesUpsertArgs} args - Arguments to update or create a Avaliacoes.
     * @example
     * // Update or create a Avaliacoes
     * const avaliacoes = await prisma.avaliacoes.upsert({
     *   create: {
     *     // ... data to create a Avaliacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacoes we want to update
     *   }
     * })
     */
    upsert<T extends avaliacoesUpsertArgs>(args: SelectSubset<T, avaliacoesUpsertArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesCountArgs} args - Arguments to filter Avaliacoes to count.
     * @example
     * // Count the number of Avaliacoes
     * const count = await prisma.avaliacoes.count({
     *   where: {
     *     // ... the filter for the Avaliacoes we want to count
     *   }
     * })
    **/
    count<T extends avaliacoesCountArgs>(
      args?: Subset<T, avaliacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacoesAggregateArgs>(args: Subset<T, AvaliacoesAggregateArgs>): Prisma.PrismaPromise<GetAvaliacoesAggregateType<T>>

    /**
     * Group by Avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends avaliacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avaliacoesGroupByArgs['orderBy'] }
        : { orderBy?: avaliacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, avaliacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avaliacoes model
   */
  readonly fields: avaliacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avaliacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avaliacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prontuarios_avaliacoes<T extends avaliacoes$prontuarios_avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, avaliacoes$prontuarios_avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the avaliacoes model
   */
  interface avaliacoesFieldRefs {
    readonly id_avaliacao: FieldRef<"avaliacoes", 'Int'>
    readonly avaliacao: FieldRef<"avaliacoes", 'String'>
    readonly data_avaliacao: FieldRef<"avaliacoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * avaliacoes findUnique
   */
  export type avaliacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes findUniqueOrThrow
   */
  export type avaliacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes findFirst
   */
  export type avaliacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacoes.
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacoes.
     */
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * avaliacoes findFirstOrThrow
   */
  export type avaliacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacoes.
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacoes.
     */
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * avaliacoes findMany
   */
  export type avaliacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which avaliacoes to fetch.
     */
    where?: avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacoes to fetch.
     */
    orderBy?: avaliacoesOrderByWithRelationInput | avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avaliacoes.
     */
    cursor?: avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacoes.
     */
    skip?: number
    distinct?: AvaliacoesScalarFieldEnum | AvaliacoesScalarFieldEnum[]
  }

  /**
   * avaliacoes create
   */
  export type avaliacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a avaliacoes.
     */
    data: XOR<avaliacoesCreateInput, avaliacoesUncheckedCreateInput>
  }

  /**
   * avaliacoes createMany
   */
  export type avaliacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avaliacoes.
     */
    data: avaliacoesCreateManyInput | avaliacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacoes createManyAndReturn
   */
  export type avaliacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * The data used to create many avaliacoes.
     */
    data: avaliacoesCreateManyInput | avaliacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacoes update
   */
  export type avaliacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a avaliacoes.
     */
    data: XOR<avaliacoesUpdateInput, avaliacoesUncheckedUpdateInput>
    /**
     * Choose, which avaliacoes to update.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes updateMany
   */
  export type avaliacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avaliacoes.
     */
    data: XOR<avaliacoesUpdateManyMutationInput, avaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which avaliacoes to update
     */
    where?: avaliacoesWhereInput
    /**
     * Limit how many avaliacoes to update.
     */
    limit?: number
  }

  /**
   * avaliacoes updateManyAndReturn
   */
  export type avaliacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * The data used to update avaliacoes.
     */
    data: XOR<avaliacoesUpdateManyMutationInput, avaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which avaliacoes to update
     */
    where?: avaliacoesWhereInput
    /**
     * Limit how many avaliacoes to update.
     */
    limit?: number
  }

  /**
   * avaliacoes upsert
   */
  export type avaliacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the avaliacoes to update in case it exists.
     */
    where: avaliacoesWhereUniqueInput
    /**
     * In case the avaliacoes found by the `where` argument doesn't exist, create a new avaliacoes with this data.
     */
    create: XOR<avaliacoesCreateInput, avaliacoesUncheckedCreateInput>
    /**
     * In case the avaliacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avaliacoesUpdateInput, avaliacoesUncheckedUpdateInput>
  }

  /**
   * avaliacoes delete
   */
  export type avaliacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
    /**
     * Filter which avaliacoes to delete.
     */
    where: avaliacoesWhereUniqueInput
  }

  /**
   * avaliacoes deleteMany
   */
  export type avaliacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacoes to delete
     */
    where?: avaliacoesWhereInput
    /**
     * Limit how many avaliacoes to delete.
     */
    limit?: number
  }

  /**
   * avaliacoes.prontuarios_avaliacoes
   */
  export type avaliacoes$prontuarios_avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    where?: prontuarios_avaliacoesWhereInput
    orderBy?: prontuarios_avaliacoesOrderByWithRelationInput | prontuarios_avaliacoesOrderByWithRelationInput[]
    cursor?: prontuarios_avaliacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_avaliacoesScalarFieldEnum | Prontuarios_avaliacoesScalarFieldEnum[]
  }

  /**
   * avaliacoes without action
   */
  export type avaliacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacoes
     */
    select?: avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacoes
     */
    omit?: avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacoesInclude<ExtArgs> | null
  }


  /**
   * Model exercicios
   */

  export type AggregateExercicios = {
    _count: ExerciciosCountAggregateOutputType | null
    _avg: ExerciciosAvgAggregateOutputType | null
    _sum: ExerciciosSumAggregateOutputType | null
    _min: ExerciciosMinAggregateOutputType | null
    _max: ExerciciosMaxAggregateOutputType | null
  }

  export type ExerciciosAvgAggregateOutputType = {
    id_exercicio: number | null
  }

  export type ExerciciosSumAggregateOutputType = {
    id_exercicio: number | null
  }

  export type ExerciciosMinAggregateOutputType = {
    id_exercicio: number | null
    titulo: string | null
    descricao: string | null
    orientacoes: string | null
  }

  export type ExerciciosMaxAggregateOutputType = {
    id_exercicio: number | null
    titulo: string | null
    descricao: string | null
    orientacoes: string | null
  }

  export type ExerciciosCountAggregateOutputType = {
    id_exercicio: number
    titulo: number
    descricao: number
    orientacoes: number
    _all: number
  }


  export type ExerciciosAvgAggregateInputType = {
    id_exercicio?: true
  }

  export type ExerciciosSumAggregateInputType = {
    id_exercicio?: true
  }

  export type ExerciciosMinAggregateInputType = {
    id_exercicio?: true
    titulo?: true
    descricao?: true
    orientacoes?: true
  }

  export type ExerciciosMaxAggregateInputType = {
    id_exercicio?: true
    titulo?: true
    descricao?: true
    orientacoes?: true
  }

  export type ExerciciosCountAggregateInputType = {
    id_exercicio?: true
    titulo?: true
    descricao?: true
    orientacoes?: true
    _all?: true
  }

  export type ExerciciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercicios to aggregate.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercicios
    **/
    _count?: true | ExerciciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciciosMaxAggregateInputType
  }

  export type GetExerciciosAggregateType<T extends ExerciciosAggregateArgs> = {
        [P in keyof T & keyof AggregateExercicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercicios[P]>
      : GetScalarType<T[P], AggregateExercicios[P]>
  }




  export type exerciciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciciosWhereInput
    orderBy?: exerciciosOrderByWithAggregationInput | exerciciosOrderByWithAggregationInput[]
    by: ExerciciosScalarFieldEnum[] | ExerciciosScalarFieldEnum
    having?: exerciciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciciosCountAggregateInputType | true
    _avg?: ExerciciosAvgAggregateInputType
    _sum?: ExerciciosSumAggregateInputType
    _min?: ExerciciosMinAggregateInputType
    _max?: ExerciciosMaxAggregateInputType
  }

  export type ExerciciosGroupByOutputType = {
    id_exercicio: number
    titulo: string
    descricao: string
    orientacoes: string
    _count: ExerciciosCountAggregateOutputType | null
    _avg: ExerciciosAvgAggregateOutputType | null
    _sum: ExerciciosSumAggregateOutputType | null
    _min: ExerciciosMinAggregateOutputType | null
    _max: ExerciciosMaxAggregateOutputType | null
  }

  type GetExerciciosGroupByPayload<T extends exerciciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciciosGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciciosGroupByOutputType[P]>
        }
      >
    >


  export type exerciciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exercicio?: boolean
    titulo?: boolean
    descricao?: boolean
    orientacoes?: boolean
    exericios_tags?: boolean | exercicios$exericios_tagsArgs<ExtArgs>
    imagens_exercicios?: boolean | exercicios$imagens_exerciciosArgs<ExtArgs>
    prontuarios_exercicios?: boolean | exercicios$prontuarios_exerciciosArgs<ExtArgs>
    _count?: boolean | ExerciciosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercicios"]>

  export type exerciciosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exercicio?: boolean
    titulo?: boolean
    descricao?: boolean
    orientacoes?: boolean
  }, ExtArgs["result"]["exercicios"]>

  export type exerciciosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exercicio?: boolean
    titulo?: boolean
    descricao?: boolean
    orientacoes?: boolean
  }, ExtArgs["result"]["exercicios"]>

  export type exerciciosSelectScalar = {
    id_exercicio?: boolean
    titulo?: boolean
    descricao?: boolean
    orientacoes?: boolean
  }

  export type exerciciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_exercicio" | "titulo" | "descricao" | "orientacoes", ExtArgs["result"]["exercicios"]>
  export type exerciciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exericios_tags?: boolean | exercicios$exericios_tagsArgs<ExtArgs>
    imagens_exercicios?: boolean | exercicios$imagens_exerciciosArgs<ExtArgs>
    prontuarios_exercicios?: boolean | exercicios$prontuarios_exerciciosArgs<ExtArgs>
    _count?: boolean | ExerciciosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type exerciciosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type exerciciosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $exerciciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercicios"
    objects: {
      exericios_tags: Prisma.$exericios_tagsPayload<ExtArgs>[]
      imagens_exercicios: Prisma.$imagens_exerciciosPayload<ExtArgs>[]
      prontuarios_exercicios: Prisma.$prontuarios_exerciciosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_exercicio: number
      titulo: string
      descricao: string
      orientacoes: string
    }, ExtArgs["result"]["exercicios"]>
    composites: {}
  }

  type exerciciosGetPayload<S extends boolean | null | undefined | exerciciosDefaultArgs> = $Result.GetResult<Prisma.$exerciciosPayload, S>

  type exerciciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exerciciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciciosCountAggregateInputType | true
    }

  export interface exerciciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercicios'], meta: { name: 'exercicios' } }
    /**
     * Find zero or one Exercicios that matches the filter.
     * @param {exerciciosFindUniqueArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exerciciosFindUniqueArgs>(args: SelectSubset<T, exerciciosFindUniqueArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercicios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exerciciosFindUniqueOrThrowArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exerciciosFindUniqueOrThrowArgs>(args: SelectSubset<T, exerciciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosFindFirstArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exerciciosFindFirstArgs>(args?: SelectSubset<T, exerciciosFindFirstArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosFindFirstOrThrowArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exerciciosFindFirstOrThrowArgs>(args?: SelectSubset<T, exerciciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercicios
     * const exercicios = await prisma.exercicios.findMany()
     * 
     * // Get first 10 Exercicios
     * const exercicios = await prisma.exercicios.findMany({ take: 10 })
     * 
     * // Only select the `id_exercicio`
     * const exerciciosWithId_exercicioOnly = await prisma.exercicios.findMany({ select: { id_exercicio: true } })
     * 
     */
    findMany<T extends exerciciosFindManyArgs>(args?: SelectSubset<T, exerciciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercicios.
     * @param {exerciciosCreateArgs} args - Arguments to create a Exercicios.
     * @example
     * // Create one Exercicios
     * const Exercicios = await prisma.exercicios.create({
     *   data: {
     *     // ... data to create a Exercicios
     *   }
     * })
     * 
     */
    create<T extends exerciciosCreateArgs>(args: SelectSubset<T, exerciciosCreateArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercicios.
     * @param {exerciciosCreateManyArgs} args - Arguments to create many Exercicios.
     * @example
     * // Create many Exercicios
     * const exercicios = await prisma.exercicios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exerciciosCreateManyArgs>(args?: SelectSubset<T, exerciciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercicios and returns the data saved in the database.
     * @param {exerciciosCreateManyAndReturnArgs} args - Arguments to create many Exercicios.
     * @example
     * // Create many Exercicios
     * const exercicios = await prisma.exercicios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercicios and only return the `id_exercicio`
     * const exerciciosWithId_exercicioOnly = await prisma.exercicios.createManyAndReturn({
     *   select: { id_exercicio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exerciciosCreateManyAndReturnArgs>(args?: SelectSubset<T, exerciciosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercicios.
     * @param {exerciciosDeleteArgs} args - Arguments to delete one Exercicios.
     * @example
     * // Delete one Exercicios
     * const Exercicios = await prisma.exercicios.delete({
     *   where: {
     *     // ... filter to delete one Exercicios
     *   }
     * })
     * 
     */
    delete<T extends exerciciosDeleteArgs>(args: SelectSubset<T, exerciciosDeleteArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercicios.
     * @param {exerciciosUpdateArgs} args - Arguments to update one Exercicios.
     * @example
     * // Update one Exercicios
     * const exercicios = await prisma.exercicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exerciciosUpdateArgs>(args: SelectSubset<T, exerciciosUpdateArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercicios.
     * @param {exerciciosDeleteManyArgs} args - Arguments to filter Exercicios to delete.
     * @example
     * // Delete a few Exercicios
     * const { count } = await prisma.exercicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exerciciosDeleteManyArgs>(args?: SelectSubset<T, exerciciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercicios
     * const exercicios = await prisma.exercicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exerciciosUpdateManyArgs>(args: SelectSubset<T, exerciciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercicios and returns the data updated in the database.
     * @param {exerciciosUpdateManyAndReturnArgs} args - Arguments to update many Exercicios.
     * @example
     * // Update many Exercicios
     * const exercicios = await prisma.exercicios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercicios and only return the `id_exercicio`
     * const exerciciosWithId_exercicioOnly = await prisma.exercicios.updateManyAndReturn({
     *   select: { id_exercicio: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exerciciosUpdateManyAndReturnArgs>(args: SelectSubset<T, exerciciosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercicios.
     * @param {exerciciosUpsertArgs} args - Arguments to update or create a Exercicios.
     * @example
     * // Update or create a Exercicios
     * const exercicios = await prisma.exercicios.upsert({
     *   create: {
     *     // ... data to create a Exercicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercicios we want to update
     *   }
     * })
     */
    upsert<T extends exerciciosUpsertArgs>(args: SelectSubset<T, exerciciosUpsertArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosCountArgs} args - Arguments to filter Exercicios to count.
     * @example
     * // Count the number of Exercicios
     * const count = await prisma.exercicios.count({
     *   where: {
     *     // ... the filter for the Exercicios we want to count
     *   }
     * })
    **/
    count<T extends exerciciosCountArgs>(
      args?: Subset<T, exerciciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciciosAggregateArgs>(args: Subset<T, ExerciciosAggregateArgs>): Prisma.PrismaPromise<GetExerciciosAggregateType<T>>

    /**
     * Group by Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exerciciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exerciciosGroupByArgs['orderBy'] }
        : { orderBy?: exerciciosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exerciciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercicios model
   */
  readonly fields: exerciciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exerciciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exericios_tags<T extends exercicios$exericios_tagsArgs<ExtArgs> = {}>(args?: Subset<T, exercicios$exericios_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imagens_exercicios<T extends exercicios$imagens_exerciciosArgs<ExtArgs> = {}>(args?: Subset<T, exercicios$imagens_exerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prontuarios_exercicios<T extends exercicios$prontuarios_exerciciosArgs<ExtArgs> = {}>(args?: Subset<T, exercicios$prontuarios_exerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exercicios model
   */
  interface exerciciosFieldRefs {
    readonly id_exercicio: FieldRef<"exercicios", 'Int'>
    readonly titulo: FieldRef<"exercicios", 'String'>
    readonly descricao: FieldRef<"exercicios", 'String'>
    readonly orientacoes: FieldRef<"exercicios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * exercicios findUnique
   */
  export type exerciciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios findUniqueOrThrow
   */
  export type exerciciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios findFirst
   */
  export type exerciciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercicios.
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercicios.
     */
    distinct?: ExerciciosScalarFieldEnum | ExerciciosScalarFieldEnum[]
  }

  /**
   * exercicios findFirstOrThrow
   */
  export type exerciciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercicios.
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercicios.
     */
    distinct?: ExerciciosScalarFieldEnum | ExerciciosScalarFieldEnum[]
  }

  /**
   * exercicios findMany
   */
  export type exerciciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercicios.
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    distinct?: ExerciciosScalarFieldEnum | ExerciciosScalarFieldEnum[]
  }

  /**
   * exercicios create
   */
  export type exerciciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to create a exercicios.
     */
    data: XOR<exerciciosCreateInput, exerciciosUncheckedCreateInput>
  }

  /**
   * exercicios createMany
   */
  export type exerciciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercicios.
     */
    data: exerciciosCreateManyInput | exerciciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercicios createManyAndReturn
   */
  export type exerciciosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * The data used to create many exercicios.
     */
    data: exerciciosCreateManyInput | exerciciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercicios update
   */
  export type exerciciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to update a exercicios.
     */
    data: XOR<exerciciosUpdateInput, exerciciosUncheckedUpdateInput>
    /**
     * Choose, which exercicios to update.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios updateMany
   */
  export type exerciciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercicios.
     */
    data: XOR<exerciciosUpdateManyMutationInput, exerciciosUncheckedUpdateManyInput>
    /**
     * Filter which exercicios to update
     */
    where?: exerciciosWhereInput
    /**
     * Limit how many exercicios to update.
     */
    limit?: number
  }

  /**
   * exercicios updateManyAndReturn
   */
  export type exerciciosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * The data used to update exercicios.
     */
    data: XOR<exerciciosUpdateManyMutationInput, exerciciosUncheckedUpdateManyInput>
    /**
     * Filter which exercicios to update
     */
    where?: exerciciosWhereInput
    /**
     * Limit how many exercicios to update.
     */
    limit?: number
  }

  /**
   * exercicios upsert
   */
  export type exerciciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * The filter to search for the exercicios to update in case it exists.
     */
    where: exerciciosWhereUniqueInput
    /**
     * In case the exercicios found by the `where` argument doesn't exist, create a new exercicios with this data.
     */
    create: XOR<exerciciosCreateInput, exerciciosUncheckedCreateInput>
    /**
     * In case the exercicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exerciciosUpdateInput, exerciciosUncheckedUpdateInput>
  }

  /**
   * exercicios delete
   */
  export type exerciciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter which exercicios to delete.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios deleteMany
   */
  export type exerciciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercicios to delete
     */
    where?: exerciciosWhereInput
    /**
     * Limit how many exercicios to delete.
     */
    limit?: number
  }

  /**
   * exercicios.exericios_tags
   */
  export type exercicios$exericios_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    where?: exericios_tagsWhereInput
    orderBy?: exericios_tagsOrderByWithRelationInput | exericios_tagsOrderByWithRelationInput[]
    cursor?: exericios_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exericios_tagsScalarFieldEnum | Exericios_tagsScalarFieldEnum[]
  }

  /**
   * exercicios.imagens_exercicios
   */
  export type exercicios$imagens_exerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    where?: imagens_exerciciosWhereInput
    orderBy?: imagens_exerciciosOrderByWithRelationInput | imagens_exerciciosOrderByWithRelationInput[]
    cursor?: imagens_exerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Imagens_exerciciosScalarFieldEnum | Imagens_exerciciosScalarFieldEnum[]
  }

  /**
   * exercicios.prontuarios_exercicios
   */
  export type exercicios$prontuarios_exerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    where?: prontuarios_exerciciosWhereInput
    orderBy?: prontuarios_exerciciosOrderByWithRelationInput | prontuarios_exerciciosOrderByWithRelationInput[]
    cursor?: prontuarios_exerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_exerciciosScalarFieldEnum | Prontuarios_exerciciosScalarFieldEnum[]
  }

  /**
   * exercicios without action
   */
  export type exerciciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
  }


  /**
   * Model exericios_tags
   */

  export type AggregateExericios_tags = {
    _count: Exericios_tagsCountAggregateOutputType | null
    _avg: Exericios_tagsAvgAggregateOutputType | null
    _sum: Exericios_tagsSumAggregateOutputType | null
    _min: Exericios_tagsMinAggregateOutputType | null
    _max: Exericios_tagsMaxAggregateOutputType | null
  }

  export type Exericios_tagsAvgAggregateOutputType = {
    id_exercicio_tag: number | null
    id_tag: number | null
    id_exercicio: number | null
  }

  export type Exericios_tagsSumAggregateOutputType = {
    id_exercicio_tag: number | null
    id_tag: number | null
    id_exercicio: number | null
  }

  export type Exericios_tagsMinAggregateOutputType = {
    id_exercicio_tag: number | null
    id_tag: number | null
    id_exercicio: number | null
  }

  export type Exericios_tagsMaxAggregateOutputType = {
    id_exercicio_tag: number | null
    id_tag: number | null
    id_exercicio: number | null
  }

  export type Exericios_tagsCountAggregateOutputType = {
    id_exercicio_tag: number
    id_tag: number
    id_exercicio: number
    _all: number
  }


  export type Exericios_tagsAvgAggregateInputType = {
    id_exercicio_tag?: true
    id_tag?: true
    id_exercicio?: true
  }

  export type Exericios_tagsSumAggregateInputType = {
    id_exercicio_tag?: true
    id_tag?: true
    id_exercicio?: true
  }

  export type Exericios_tagsMinAggregateInputType = {
    id_exercicio_tag?: true
    id_tag?: true
    id_exercicio?: true
  }

  export type Exericios_tagsMaxAggregateInputType = {
    id_exercicio_tag?: true
    id_tag?: true
    id_exercicio?: true
  }

  export type Exericios_tagsCountAggregateInputType = {
    id_exercicio_tag?: true
    id_tag?: true
    id_exercicio?: true
    _all?: true
  }

  export type Exericios_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exericios_tags to aggregate.
     */
    where?: exericios_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exericios_tags to fetch.
     */
    orderBy?: exericios_tagsOrderByWithRelationInput | exericios_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exericios_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exericios_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exericios_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exericios_tags
    **/
    _count?: true | Exericios_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Exericios_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Exericios_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exericios_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exericios_tagsMaxAggregateInputType
  }

  export type GetExericios_tagsAggregateType<T extends Exericios_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateExericios_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExericios_tags[P]>
      : GetScalarType<T[P], AggregateExericios_tags[P]>
  }




  export type exericios_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exericios_tagsWhereInput
    orderBy?: exericios_tagsOrderByWithAggregationInput | exericios_tagsOrderByWithAggregationInput[]
    by: Exericios_tagsScalarFieldEnum[] | Exericios_tagsScalarFieldEnum
    having?: exericios_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exericios_tagsCountAggregateInputType | true
    _avg?: Exericios_tagsAvgAggregateInputType
    _sum?: Exericios_tagsSumAggregateInputType
    _min?: Exericios_tagsMinAggregateInputType
    _max?: Exericios_tagsMaxAggregateInputType
  }

  export type Exericios_tagsGroupByOutputType = {
    id_exercicio_tag: number
    id_tag: number
    id_exercicio: number
    _count: Exericios_tagsCountAggregateOutputType | null
    _avg: Exericios_tagsAvgAggregateOutputType | null
    _sum: Exericios_tagsSumAggregateOutputType | null
    _min: Exericios_tagsMinAggregateOutputType | null
    _max: Exericios_tagsMaxAggregateOutputType | null
  }

  type GetExericios_tagsGroupByPayload<T extends exericios_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Exericios_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exericios_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exericios_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Exericios_tagsGroupByOutputType[P]>
        }
      >
    >


  export type exericios_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exercicio_tag?: boolean
    id_tag?: boolean
    id_exercicio?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exericios_tags"]>

  export type exericios_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exercicio_tag?: boolean
    id_tag?: boolean
    id_exercicio?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exericios_tags"]>

  export type exericios_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_exercicio_tag?: boolean
    id_tag?: boolean
    id_exercicio?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exericios_tags"]>

  export type exericios_tagsSelectScalar = {
    id_exercicio_tag?: boolean
    id_tag?: boolean
    id_exercicio?: boolean
  }

  export type exericios_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_exercicio_tag" | "id_tag" | "id_exercicio", ExtArgs["result"]["exericios_tags"]>
  export type exericios_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type exericios_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type exericios_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $exericios_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exericios_tags"
    objects: {
      exercicios: Prisma.$exerciciosPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_exercicio_tag: number
      id_tag: number
      id_exercicio: number
    }, ExtArgs["result"]["exericios_tags"]>
    composites: {}
  }

  type exericios_tagsGetPayload<S extends boolean | null | undefined | exericios_tagsDefaultArgs> = $Result.GetResult<Prisma.$exericios_tagsPayload, S>

  type exericios_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exericios_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Exericios_tagsCountAggregateInputType | true
    }

  export interface exericios_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exericios_tags'], meta: { name: 'exericios_tags' } }
    /**
     * Find zero or one Exericios_tags that matches the filter.
     * @param {exericios_tagsFindUniqueArgs} args - Arguments to find a Exericios_tags
     * @example
     * // Get one Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exericios_tagsFindUniqueArgs>(args: SelectSubset<T, exericios_tagsFindUniqueArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exericios_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exericios_tagsFindUniqueOrThrowArgs} args - Arguments to find a Exericios_tags
     * @example
     * // Get one Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exericios_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, exericios_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exericios_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exericios_tagsFindFirstArgs} args - Arguments to find a Exericios_tags
     * @example
     * // Get one Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exericios_tagsFindFirstArgs>(args?: SelectSubset<T, exericios_tagsFindFirstArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exericios_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exericios_tagsFindFirstOrThrowArgs} args - Arguments to find a Exericios_tags
     * @example
     * // Get one Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exericios_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, exericios_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exericios_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exericios_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.findMany()
     * 
     * // Get first 10 Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.findMany({ take: 10 })
     * 
     * // Only select the `id_exercicio_tag`
     * const exericios_tagsWithId_exercicio_tagOnly = await prisma.exericios_tags.findMany({ select: { id_exercicio_tag: true } })
     * 
     */
    findMany<T extends exericios_tagsFindManyArgs>(args?: SelectSubset<T, exericios_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exericios_tags.
     * @param {exericios_tagsCreateArgs} args - Arguments to create a Exericios_tags.
     * @example
     * // Create one Exericios_tags
     * const Exericios_tags = await prisma.exericios_tags.create({
     *   data: {
     *     // ... data to create a Exericios_tags
     *   }
     * })
     * 
     */
    create<T extends exericios_tagsCreateArgs>(args: SelectSubset<T, exericios_tagsCreateArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exericios_tags.
     * @param {exericios_tagsCreateManyArgs} args - Arguments to create many Exericios_tags.
     * @example
     * // Create many Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exericios_tagsCreateManyArgs>(args?: SelectSubset<T, exericios_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exericios_tags and returns the data saved in the database.
     * @param {exericios_tagsCreateManyAndReturnArgs} args - Arguments to create many Exericios_tags.
     * @example
     * // Create many Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exericios_tags and only return the `id_exercicio_tag`
     * const exericios_tagsWithId_exercicio_tagOnly = await prisma.exericios_tags.createManyAndReturn({
     *   select: { id_exercicio_tag: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exericios_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, exericios_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exericios_tags.
     * @param {exericios_tagsDeleteArgs} args - Arguments to delete one Exericios_tags.
     * @example
     * // Delete one Exericios_tags
     * const Exericios_tags = await prisma.exericios_tags.delete({
     *   where: {
     *     // ... filter to delete one Exericios_tags
     *   }
     * })
     * 
     */
    delete<T extends exericios_tagsDeleteArgs>(args: SelectSubset<T, exericios_tagsDeleteArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exericios_tags.
     * @param {exericios_tagsUpdateArgs} args - Arguments to update one Exericios_tags.
     * @example
     * // Update one Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exericios_tagsUpdateArgs>(args: SelectSubset<T, exericios_tagsUpdateArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exericios_tags.
     * @param {exericios_tagsDeleteManyArgs} args - Arguments to filter Exericios_tags to delete.
     * @example
     * // Delete a few Exericios_tags
     * const { count } = await prisma.exericios_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exericios_tagsDeleteManyArgs>(args?: SelectSubset<T, exericios_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exericios_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exericios_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exericios_tagsUpdateManyArgs>(args: SelectSubset<T, exericios_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exericios_tags and returns the data updated in the database.
     * @param {exericios_tagsUpdateManyAndReturnArgs} args - Arguments to update many Exericios_tags.
     * @example
     * // Update many Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exericios_tags and only return the `id_exercicio_tag`
     * const exericios_tagsWithId_exercicio_tagOnly = await prisma.exericios_tags.updateManyAndReturn({
     *   select: { id_exercicio_tag: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exericios_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, exericios_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exericios_tags.
     * @param {exericios_tagsUpsertArgs} args - Arguments to update or create a Exericios_tags.
     * @example
     * // Update or create a Exericios_tags
     * const exericios_tags = await prisma.exericios_tags.upsert({
     *   create: {
     *     // ... data to create a Exericios_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exericios_tags we want to update
     *   }
     * })
     */
    upsert<T extends exericios_tagsUpsertArgs>(args: SelectSubset<T, exericios_tagsUpsertArgs<ExtArgs>>): Prisma__exericios_tagsClient<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exericios_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exericios_tagsCountArgs} args - Arguments to filter Exericios_tags to count.
     * @example
     * // Count the number of Exericios_tags
     * const count = await prisma.exericios_tags.count({
     *   where: {
     *     // ... the filter for the Exericios_tags we want to count
     *   }
     * })
    **/
    count<T extends exericios_tagsCountArgs>(
      args?: Subset<T, exericios_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exericios_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exericios_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exericios_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exericios_tagsAggregateArgs>(args: Subset<T, Exericios_tagsAggregateArgs>): Prisma.PrismaPromise<GetExericios_tagsAggregateType<T>>

    /**
     * Group by Exericios_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exericios_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exericios_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exericios_tagsGroupByArgs['orderBy'] }
        : { orderBy?: exericios_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exericios_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExericios_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exericios_tags model
   */
  readonly fields: exericios_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exericios_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exericios_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercicios<T extends exerciciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciciosDefaultArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exericios_tags model
   */
  interface exericios_tagsFieldRefs {
    readonly id_exercicio_tag: FieldRef<"exericios_tags", 'Int'>
    readonly id_tag: FieldRef<"exericios_tags", 'Int'>
    readonly id_exercicio: FieldRef<"exericios_tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * exericios_tags findUnique
   */
  export type exericios_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * Filter, which exericios_tags to fetch.
     */
    where: exericios_tagsWhereUniqueInput
  }

  /**
   * exericios_tags findUniqueOrThrow
   */
  export type exericios_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * Filter, which exericios_tags to fetch.
     */
    where: exericios_tagsWhereUniqueInput
  }

  /**
   * exericios_tags findFirst
   */
  export type exericios_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * Filter, which exericios_tags to fetch.
     */
    where?: exericios_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exericios_tags to fetch.
     */
    orderBy?: exericios_tagsOrderByWithRelationInput | exericios_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exericios_tags.
     */
    cursor?: exericios_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exericios_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exericios_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exericios_tags.
     */
    distinct?: Exericios_tagsScalarFieldEnum | Exericios_tagsScalarFieldEnum[]
  }

  /**
   * exericios_tags findFirstOrThrow
   */
  export type exericios_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * Filter, which exericios_tags to fetch.
     */
    where?: exericios_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exericios_tags to fetch.
     */
    orderBy?: exericios_tagsOrderByWithRelationInput | exericios_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exericios_tags.
     */
    cursor?: exericios_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exericios_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exericios_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exericios_tags.
     */
    distinct?: Exericios_tagsScalarFieldEnum | Exericios_tagsScalarFieldEnum[]
  }

  /**
   * exericios_tags findMany
   */
  export type exericios_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * Filter, which exericios_tags to fetch.
     */
    where?: exericios_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exericios_tags to fetch.
     */
    orderBy?: exericios_tagsOrderByWithRelationInput | exericios_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exericios_tags.
     */
    cursor?: exericios_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exericios_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exericios_tags.
     */
    skip?: number
    distinct?: Exericios_tagsScalarFieldEnum | Exericios_tagsScalarFieldEnum[]
  }

  /**
   * exericios_tags create
   */
  export type exericios_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a exericios_tags.
     */
    data: XOR<exericios_tagsCreateInput, exericios_tagsUncheckedCreateInput>
  }

  /**
   * exericios_tags createMany
   */
  export type exericios_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exericios_tags.
     */
    data: exericios_tagsCreateManyInput | exericios_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exericios_tags createManyAndReturn
   */
  export type exericios_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many exericios_tags.
     */
    data: exericios_tagsCreateManyInput | exericios_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * exericios_tags update
   */
  export type exericios_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a exericios_tags.
     */
    data: XOR<exericios_tagsUpdateInput, exericios_tagsUncheckedUpdateInput>
    /**
     * Choose, which exericios_tags to update.
     */
    where: exericios_tagsWhereUniqueInput
  }

  /**
   * exericios_tags updateMany
   */
  export type exericios_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exericios_tags.
     */
    data: XOR<exericios_tagsUpdateManyMutationInput, exericios_tagsUncheckedUpdateManyInput>
    /**
     * Filter which exericios_tags to update
     */
    where?: exericios_tagsWhereInput
    /**
     * Limit how many exericios_tags to update.
     */
    limit?: number
  }

  /**
   * exericios_tags updateManyAndReturn
   */
  export type exericios_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * The data used to update exericios_tags.
     */
    data: XOR<exericios_tagsUpdateManyMutationInput, exericios_tagsUncheckedUpdateManyInput>
    /**
     * Filter which exericios_tags to update
     */
    where?: exericios_tagsWhereInput
    /**
     * Limit how many exericios_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * exericios_tags upsert
   */
  export type exericios_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the exericios_tags to update in case it exists.
     */
    where: exericios_tagsWhereUniqueInput
    /**
     * In case the exericios_tags found by the `where` argument doesn't exist, create a new exericios_tags with this data.
     */
    create: XOR<exericios_tagsCreateInput, exericios_tagsUncheckedCreateInput>
    /**
     * In case the exericios_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exericios_tagsUpdateInput, exericios_tagsUncheckedUpdateInput>
  }

  /**
   * exericios_tags delete
   */
  export type exericios_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    /**
     * Filter which exericios_tags to delete.
     */
    where: exericios_tagsWhereUniqueInput
  }

  /**
   * exericios_tags deleteMany
   */
  export type exericios_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exericios_tags to delete
     */
    where?: exericios_tagsWhereInput
    /**
     * Limit how many exericios_tags to delete.
     */
    limit?: number
  }

  /**
   * exericios_tags without action
   */
  export type exericios_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
  }


  /**
   * Model imagens_exercicios
   */

  export type AggregateImagens_exercicios = {
    _count: Imagens_exerciciosCountAggregateOutputType | null
    _avg: Imagens_exerciciosAvgAggregateOutputType | null
    _sum: Imagens_exerciciosSumAggregateOutputType | null
    _min: Imagens_exerciciosMinAggregateOutputType | null
    _max: Imagens_exerciciosMaxAggregateOutputType | null
  }

  export type Imagens_exerciciosAvgAggregateOutputType = {
    id_imagem: number | null
    id_exercicio: number | null
  }

  export type Imagens_exerciciosSumAggregateOutputType = {
    id_imagem: number | null
    id_exercicio: number | null
  }

  export type Imagens_exerciciosMinAggregateOutputType = {
    id_imagem: number | null
    link_imagem: string | null
    id_exercicio: number | null
  }

  export type Imagens_exerciciosMaxAggregateOutputType = {
    id_imagem: number | null
    link_imagem: string | null
    id_exercicio: number | null
  }

  export type Imagens_exerciciosCountAggregateOutputType = {
    id_imagem: number
    link_imagem: number
    id_exercicio: number
    _all: number
  }


  export type Imagens_exerciciosAvgAggregateInputType = {
    id_imagem?: true
    id_exercicio?: true
  }

  export type Imagens_exerciciosSumAggregateInputType = {
    id_imagem?: true
    id_exercicio?: true
  }

  export type Imagens_exerciciosMinAggregateInputType = {
    id_imagem?: true
    link_imagem?: true
    id_exercicio?: true
  }

  export type Imagens_exerciciosMaxAggregateInputType = {
    id_imagem?: true
    link_imagem?: true
    id_exercicio?: true
  }

  export type Imagens_exerciciosCountAggregateInputType = {
    id_imagem?: true
    link_imagem?: true
    id_exercicio?: true
    _all?: true
  }

  export type Imagens_exerciciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imagens_exercicios to aggregate.
     */
    where?: imagens_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens_exercicios to fetch.
     */
    orderBy?: imagens_exerciciosOrderByWithRelationInput | imagens_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagens_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imagens_exercicios
    **/
    _count?: true | Imagens_exerciciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Imagens_exerciciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Imagens_exerciciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Imagens_exerciciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Imagens_exerciciosMaxAggregateInputType
  }

  export type GetImagens_exerciciosAggregateType<T extends Imagens_exerciciosAggregateArgs> = {
        [P in keyof T & keyof AggregateImagens_exercicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagens_exercicios[P]>
      : GetScalarType<T[P], AggregateImagens_exercicios[P]>
  }




  export type imagens_exerciciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagens_exerciciosWhereInput
    orderBy?: imagens_exerciciosOrderByWithAggregationInput | imagens_exerciciosOrderByWithAggregationInput[]
    by: Imagens_exerciciosScalarFieldEnum[] | Imagens_exerciciosScalarFieldEnum
    having?: imagens_exerciciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Imagens_exerciciosCountAggregateInputType | true
    _avg?: Imagens_exerciciosAvgAggregateInputType
    _sum?: Imagens_exerciciosSumAggregateInputType
    _min?: Imagens_exerciciosMinAggregateInputType
    _max?: Imagens_exerciciosMaxAggregateInputType
  }

  export type Imagens_exerciciosGroupByOutputType = {
    id_imagem: number
    link_imagem: string
    id_exercicio: number
    _count: Imagens_exerciciosCountAggregateOutputType | null
    _avg: Imagens_exerciciosAvgAggregateOutputType | null
    _sum: Imagens_exerciciosSumAggregateOutputType | null
    _min: Imagens_exerciciosMinAggregateOutputType | null
    _max: Imagens_exerciciosMaxAggregateOutputType | null
  }

  type GetImagens_exerciciosGroupByPayload<T extends imagens_exerciciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Imagens_exerciciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Imagens_exerciciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Imagens_exerciciosGroupByOutputType[P]>
            : GetScalarType<T[P], Imagens_exerciciosGroupByOutputType[P]>
        }
      >
    >


  export type imagens_exerciciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_imagem?: boolean
    link_imagem?: boolean
    id_exercicio?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagens_exercicios"]>

  export type imagens_exerciciosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_imagem?: boolean
    link_imagem?: boolean
    id_exercicio?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagens_exercicios"]>

  export type imagens_exerciciosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_imagem?: boolean
    link_imagem?: boolean
    id_exercicio?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagens_exercicios"]>

  export type imagens_exerciciosSelectScalar = {
    id_imagem?: boolean
    link_imagem?: boolean
    id_exercicio?: boolean
  }

  export type imagens_exerciciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_imagem" | "link_imagem" | "id_exercicio", ExtArgs["result"]["imagens_exercicios"]>
  export type imagens_exerciciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
  }
  export type imagens_exerciciosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
  }
  export type imagens_exerciciosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
  }

  export type $imagens_exerciciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imagens_exercicios"
    objects: {
      exercicios: Prisma.$exerciciosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_imagem: number
      link_imagem: string
      id_exercicio: number
    }, ExtArgs["result"]["imagens_exercicios"]>
    composites: {}
  }

  type imagens_exerciciosGetPayload<S extends boolean | null | undefined | imagens_exerciciosDefaultArgs> = $Result.GetResult<Prisma.$imagens_exerciciosPayload, S>

  type imagens_exerciciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imagens_exerciciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Imagens_exerciciosCountAggregateInputType | true
    }

  export interface imagens_exerciciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imagens_exercicios'], meta: { name: 'imagens_exercicios' } }
    /**
     * Find zero or one Imagens_exercicios that matches the filter.
     * @param {imagens_exerciciosFindUniqueArgs} args - Arguments to find a Imagens_exercicios
     * @example
     * // Get one Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagens_exerciciosFindUniqueArgs>(args: SelectSubset<T, imagens_exerciciosFindUniqueArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imagens_exercicios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imagens_exerciciosFindUniqueOrThrowArgs} args - Arguments to find a Imagens_exercicios
     * @example
     * // Get one Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagens_exerciciosFindUniqueOrThrowArgs>(args: SelectSubset<T, imagens_exerciciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagens_exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagens_exerciciosFindFirstArgs} args - Arguments to find a Imagens_exercicios
     * @example
     * // Get one Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagens_exerciciosFindFirstArgs>(args?: SelectSubset<T, imagens_exerciciosFindFirstArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagens_exercicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagens_exerciciosFindFirstOrThrowArgs} args - Arguments to find a Imagens_exercicios
     * @example
     * // Get one Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagens_exerciciosFindFirstOrThrowArgs>(args?: SelectSubset<T, imagens_exerciciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imagens_exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagens_exerciciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.findMany()
     * 
     * // Get first 10 Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.findMany({ take: 10 })
     * 
     * // Only select the `id_imagem`
     * const imagens_exerciciosWithId_imagemOnly = await prisma.imagens_exercicios.findMany({ select: { id_imagem: true } })
     * 
     */
    findMany<T extends imagens_exerciciosFindManyArgs>(args?: SelectSubset<T, imagens_exerciciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imagens_exercicios.
     * @param {imagens_exerciciosCreateArgs} args - Arguments to create a Imagens_exercicios.
     * @example
     * // Create one Imagens_exercicios
     * const Imagens_exercicios = await prisma.imagens_exercicios.create({
     *   data: {
     *     // ... data to create a Imagens_exercicios
     *   }
     * })
     * 
     */
    create<T extends imagens_exerciciosCreateArgs>(args: SelectSubset<T, imagens_exerciciosCreateArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imagens_exercicios.
     * @param {imagens_exerciciosCreateManyArgs} args - Arguments to create many Imagens_exercicios.
     * @example
     * // Create many Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagens_exerciciosCreateManyArgs>(args?: SelectSubset<T, imagens_exerciciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagens_exercicios and returns the data saved in the database.
     * @param {imagens_exerciciosCreateManyAndReturnArgs} args - Arguments to create many Imagens_exercicios.
     * @example
     * // Create many Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagens_exercicios and only return the `id_imagem`
     * const imagens_exerciciosWithId_imagemOnly = await prisma.imagens_exercicios.createManyAndReturn({
     *   select: { id_imagem: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imagens_exerciciosCreateManyAndReturnArgs>(args?: SelectSubset<T, imagens_exerciciosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imagens_exercicios.
     * @param {imagens_exerciciosDeleteArgs} args - Arguments to delete one Imagens_exercicios.
     * @example
     * // Delete one Imagens_exercicios
     * const Imagens_exercicios = await prisma.imagens_exercicios.delete({
     *   where: {
     *     // ... filter to delete one Imagens_exercicios
     *   }
     * })
     * 
     */
    delete<T extends imagens_exerciciosDeleteArgs>(args: SelectSubset<T, imagens_exerciciosDeleteArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imagens_exercicios.
     * @param {imagens_exerciciosUpdateArgs} args - Arguments to update one Imagens_exercicios.
     * @example
     * // Update one Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagens_exerciciosUpdateArgs>(args: SelectSubset<T, imagens_exerciciosUpdateArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imagens_exercicios.
     * @param {imagens_exerciciosDeleteManyArgs} args - Arguments to filter Imagens_exercicios to delete.
     * @example
     * // Delete a few Imagens_exercicios
     * const { count } = await prisma.imagens_exercicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagens_exerciciosDeleteManyArgs>(args?: SelectSubset<T, imagens_exerciciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagens_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagens_exerciciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagens_exerciciosUpdateManyArgs>(args: SelectSubset<T, imagens_exerciciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagens_exercicios and returns the data updated in the database.
     * @param {imagens_exerciciosUpdateManyAndReturnArgs} args - Arguments to update many Imagens_exercicios.
     * @example
     * // Update many Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imagens_exercicios and only return the `id_imagem`
     * const imagens_exerciciosWithId_imagemOnly = await prisma.imagens_exercicios.updateManyAndReturn({
     *   select: { id_imagem: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends imagens_exerciciosUpdateManyAndReturnArgs>(args: SelectSubset<T, imagens_exerciciosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imagens_exercicios.
     * @param {imagens_exerciciosUpsertArgs} args - Arguments to update or create a Imagens_exercicios.
     * @example
     * // Update or create a Imagens_exercicios
     * const imagens_exercicios = await prisma.imagens_exercicios.upsert({
     *   create: {
     *     // ... data to create a Imagens_exercicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagens_exercicios we want to update
     *   }
     * })
     */
    upsert<T extends imagens_exerciciosUpsertArgs>(args: SelectSubset<T, imagens_exerciciosUpsertArgs<ExtArgs>>): Prisma__imagens_exerciciosClient<$Result.GetResult<Prisma.$imagens_exerciciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imagens_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagens_exerciciosCountArgs} args - Arguments to filter Imagens_exercicios to count.
     * @example
     * // Count the number of Imagens_exercicios
     * const count = await prisma.imagens_exercicios.count({
     *   where: {
     *     // ... the filter for the Imagens_exercicios we want to count
     *   }
     * })
    **/
    count<T extends imagens_exerciciosCountArgs>(
      args?: Subset<T, imagens_exerciciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Imagens_exerciciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagens_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Imagens_exerciciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Imagens_exerciciosAggregateArgs>(args: Subset<T, Imagens_exerciciosAggregateArgs>): Prisma.PrismaPromise<GetImagens_exerciciosAggregateType<T>>

    /**
     * Group by Imagens_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagens_exerciciosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imagens_exerciciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagens_exerciciosGroupByArgs['orderBy'] }
        : { orderBy?: imagens_exerciciosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imagens_exerciciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagens_exerciciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imagens_exercicios model
   */
  readonly fields: imagens_exerciciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imagens_exercicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagens_exerciciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercicios<T extends exerciciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciciosDefaultArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the imagens_exercicios model
   */
  interface imagens_exerciciosFieldRefs {
    readonly id_imagem: FieldRef<"imagens_exercicios", 'Int'>
    readonly link_imagem: FieldRef<"imagens_exercicios", 'String'>
    readonly id_exercicio: FieldRef<"imagens_exercicios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * imagens_exercicios findUnique
   */
  export type imagens_exerciciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which imagens_exercicios to fetch.
     */
    where: imagens_exerciciosWhereUniqueInput
  }

  /**
   * imagens_exercicios findUniqueOrThrow
   */
  export type imagens_exerciciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which imagens_exercicios to fetch.
     */
    where: imagens_exerciciosWhereUniqueInput
  }

  /**
   * imagens_exercicios findFirst
   */
  export type imagens_exerciciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which imagens_exercicios to fetch.
     */
    where?: imagens_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens_exercicios to fetch.
     */
    orderBy?: imagens_exerciciosOrderByWithRelationInput | imagens_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imagens_exercicios.
     */
    cursor?: imagens_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imagens_exercicios.
     */
    distinct?: Imagens_exerciciosScalarFieldEnum | Imagens_exerciciosScalarFieldEnum[]
  }

  /**
   * imagens_exercicios findFirstOrThrow
   */
  export type imagens_exerciciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which imagens_exercicios to fetch.
     */
    where?: imagens_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens_exercicios to fetch.
     */
    orderBy?: imagens_exerciciosOrderByWithRelationInput | imagens_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imagens_exercicios.
     */
    cursor?: imagens_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imagens_exercicios.
     */
    distinct?: Imagens_exerciciosScalarFieldEnum | Imagens_exerciciosScalarFieldEnum[]
  }

  /**
   * imagens_exercicios findMany
   */
  export type imagens_exerciciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which imagens_exercicios to fetch.
     */
    where?: imagens_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens_exercicios to fetch.
     */
    orderBy?: imagens_exerciciosOrderByWithRelationInput | imagens_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imagens_exercicios.
     */
    cursor?: imagens_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens_exercicios.
     */
    skip?: number
    distinct?: Imagens_exerciciosScalarFieldEnum | Imagens_exerciciosScalarFieldEnum[]
  }

  /**
   * imagens_exercicios create
   */
  export type imagens_exerciciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to create a imagens_exercicios.
     */
    data: XOR<imagens_exerciciosCreateInput, imagens_exerciciosUncheckedCreateInput>
  }

  /**
   * imagens_exercicios createMany
   */
  export type imagens_exerciciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imagens_exercicios.
     */
    data: imagens_exerciciosCreateManyInput | imagens_exerciciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imagens_exercicios createManyAndReturn
   */
  export type imagens_exerciciosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * The data used to create many imagens_exercicios.
     */
    data: imagens_exerciciosCreateManyInput | imagens_exerciciosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * imagens_exercicios update
   */
  export type imagens_exerciciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to update a imagens_exercicios.
     */
    data: XOR<imagens_exerciciosUpdateInput, imagens_exerciciosUncheckedUpdateInput>
    /**
     * Choose, which imagens_exercicios to update.
     */
    where: imagens_exerciciosWhereUniqueInput
  }

  /**
   * imagens_exercicios updateMany
   */
  export type imagens_exerciciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imagens_exercicios.
     */
    data: XOR<imagens_exerciciosUpdateManyMutationInput, imagens_exerciciosUncheckedUpdateManyInput>
    /**
     * Filter which imagens_exercicios to update
     */
    where?: imagens_exerciciosWhereInput
    /**
     * Limit how many imagens_exercicios to update.
     */
    limit?: number
  }

  /**
   * imagens_exercicios updateManyAndReturn
   */
  export type imagens_exerciciosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * The data used to update imagens_exercicios.
     */
    data: XOR<imagens_exerciciosUpdateManyMutationInput, imagens_exerciciosUncheckedUpdateManyInput>
    /**
     * Filter which imagens_exercicios to update
     */
    where?: imagens_exerciciosWhereInput
    /**
     * Limit how many imagens_exercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * imagens_exercicios upsert
   */
  export type imagens_exerciciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * The filter to search for the imagens_exercicios to update in case it exists.
     */
    where: imagens_exerciciosWhereUniqueInput
    /**
     * In case the imagens_exercicios found by the `where` argument doesn't exist, create a new imagens_exercicios with this data.
     */
    create: XOR<imagens_exerciciosCreateInput, imagens_exerciciosUncheckedCreateInput>
    /**
     * In case the imagens_exercicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagens_exerciciosUpdateInput, imagens_exerciciosUncheckedUpdateInput>
  }

  /**
   * imagens_exercicios delete
   */
  export type imagens_exerciciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
    /**
     * Filter which imagens_exercicios to delete.
     */
    where: imagens_exerciciosWhereUniqueInput
  }

  /**
   * imagens_exercicios deleteMany
   */
  export type imagens_exerciciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imagens_exercicios to delete
     */
    where?: imagens_exerciciosWhereInput
    /**
     * Limit how many imagens_exercicios to delete.
     */
    limit?: number
  }

  /**
   * imagens_exercicios without action
   */
  export type imagens_exerciciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagens_exercicios
     */
    select?: imagens_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagens_exercicios
     */
    omit?: imagens_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagens_exerciciosInclude<ExtArgs> | null
  }


  /**
   * Model orientacoes
   */

  export type AggregateOrientacoes = {
    _count: OrientacoesCountAggregateOutputType | null
    _avg: OrientacoesAvgAggregateOutputType | null
    _sum: OrientacoesSumAggregateOutputType | null
    _min: OrientacoesMinAggregateOutputType | null
    _max: OrientacoesMaxAggregateOutputType | null
  }

  export type OrientacoesAvgAggregateOutputType = {
    id_orientacao: number | null
    id_prontuario: number | null
  }

  export type OrientacoesSumAggregateOutputType = {
    id_orientacao: number | null
    id_prontuario: number | null
  }

  export type OrientacoesMinAggregateOutputType = {
    id_orientacao: number | null
    orientacao: string | null
    data_orientacao: Date | null
    id_prontuario: number | null
  }

  export type OrientacoesMaxAggregateOutputType = {
    id_orientacao: number | null
    orientacao: string | null
    data_orientacao: Date | null
    id_prontuario: number | null
  }

  export type OrientacoesCountAggregateOutputType = {
    id_orientacao: number
    orientacao: number
    data_orientacao: number
    id_prontuario: number
    _all: number
  }


  export type OrientacoesAvgAggregateInputType = {
    id_orientacao?: true
    id_prontuario?: true
  }

  export type OrientacoesSumAggregateInputType = {
    id_orientacao?: true
    id_prontuario?: true
  }

  export type OrientacoesMinAggregateInputType = {
    id_orientacao?: true
    orientacao?: true
    data_orientacao?: true
    id_prontuario?: true
  }

  export type OrientacoesMaxAggregateInputType = {
    id_orientacao?: true
    orientacao?: true
    data_orientacao?: true
    id_prontuario?: true
  }

  export type OrientacoesCountAggregateInputType = {
    id_orientacao?: true
    orientacao?: true
    data_orientacao?: true
    id_prontuario?: true
    _all?: true
  }

  export type OrientacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orientacoes to aggregate.
     */
    where?: orientacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orientacoes to fetch.
     */
    orderBy?: orientacoesOrderByWithRelationInput | orientacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orientacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orientacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orientacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orientacoes
    **/
    _count?: true | OrientacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrientacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrientacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrientacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrientacoesMaxAggregateInputType
  }

  export type GetOrientacoesAggregateType<T extends OrientacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateOrientacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrientacoes[P]>
      : GetScalarType<T[P], AggregateOrientacoes[P]>
  }




  export type orientacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orientacoesWhereInput
    orderBy?: orientacoesOrderByWithAggregationInput | orientacoesOrderByWithAggregationInput[]
    by: OrientacoesScalarFieldEnum[] | OrientacoesScalarFieldEnum
    having?: orientacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrientacoesCountAggregateInputType | true
    _avg?: OrientacoesAvgAggregateInputType
    _sum?: OrientacoesSumAggregateInputType
    _min?: OrientacoesMinAggregateInputType
    _max?: OrientacoesMaxAggregateInputType
  }

  export type OrientacoesGroupByOutputType = {
    id_orientacao: number
    orientacao: string
    data_orientacao: Date
    id_prontuario: number
    _count: OrientacoesCountAggregateOutputType | null
    _avg: OrientacoesAvgAggregateOutputType | null
    _sum: OrientacoesSumAggregateOutputType | null
    _min: OrientacoesMinAggregateOutputType | null
    _max: OrientacoesMaxAggregateOutputType | null
  }

  type GetOrientacoesGroupByPayload<T extends orientacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrientacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrientacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrientacoesGroupByOutputType[P]>
            : GetScalarType<T[P], OrientacoesGroupByOutputType[P]>
        }
      >
    >


  export type orientacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orientacao?: boolean
    orientacao?: boolean
    data_orientacao?: boolean
    id_prontuario?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orientacoes"]>

  export type orientacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orientacao?: boolean
    orientacao?: boolean
    data_orientacao?: boolean
    id_prontuario?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orientacoes"]>

  export type orientacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orientacao?: boolean
    orientacao?: boolean
    data_orientacao?: boolean
    id_prontuario?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orientacoes"]>

  export type orientacoesSelectScalar = {
    id_orientacao?: boolean
    orientacao?: boolean
    data_orientacao?: boolean
    id_prontuario?: boolean
  }

  export type orientacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_orientacao" | "orientacao" | "data_orientacao" | "id_prontuario", ExtArgs["result"]["orientacoes"]>
  export type orientacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }
  export type orientacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }
  export type orientacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }

  export type $orientacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orientacoes"
    objects: {
      prontuarios: Prisma.$prontuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_orientacao: number
      orientacao: string
      data_orientacao: Date
      id_prontuario: number
    }, ExtArgs["result"]["orientacoes"]>
    composites: {}
  }

  type orientacoesGetPayload<S extends boolean | null | undefined | orientacoesDefaultArgs> = $Result.GetResult<Prisma.$orientacoesPayload, S>

  type orientacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orientacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrientacoesCountAggregateInputType | true
    }

  export interface orientacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orientacoes'], meta: { name: 'orientacoes' } }
    /**
     * Find zero or one Orientacoes that matches the filter.
     * @param {orientacoesFindUniqueArgs} args - Arguments to find a Orientacoes
     * @example
     * // Get one Orientacoes
     * const orientacoes = await prisma.orientacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orientacoesFindUniqueArgs>(args: SelectSubset<T, orientacoesFindUniqueArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orientacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orientacoesFindUniqueOrThrowArgs} args - Arguments to find a Orientacoes
     * @example
     * // Get one Orientacoes
     * const orientacoes = await prisma.orientacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orientacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, orientacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orientacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orientacoesFindFirstArgs} args - Arguments to find a Orientacoes
     * @example
     * // Get one Orientacoes
     * const orientacoes = await prisma.orientacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orientacoesFindFirstArgs>(args?: SelectSubset<T, orientacoesFindFirstArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orientacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orientacoesFindFirstOrThrowArgs} args - Arguments to find a Orientacoes
     * @example
     * // Get one Orientacoes
     * const orientacoes = await prisma.orientacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orientacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, orientacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orientacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orientacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orientacoes
     * const orientacoes = await prisma.orientacoes.findMany()
     * 
     * // Get first 10 Orientacoes
     * const orientacoes = await prisma.orientacoes.findMany({ take: 10 })
     * 
     * // Only select the `id_orientacao`
     * const orientacoesWithId_orientacaoOnly = await prisma.orientacoes.findMany({ select: { id_orientacao: true } })
     * 
     */
    findMany<T extends orientacoesFindManyArgs>(args?: SelectSubset<T, orientacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orientacoes.
     * @param {orientacoesCreateArgs} args - Arguments to create a Orientacoes.
     * @example
     * // Create one Orientacoes
     * const Orientacoes = await prisma.orientacoes.create({
     *   data: {
     *     // ... data to create a Orientacoes
     *   }
     * })
     * 
     */
    create<T extends orientacoesCreateArgs>(args: SelectSubset<T, orientacoesCreateArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orientacoes.
     * @param {orientacoesCreateManyArgs} args - Arguments to create many Orientacoes.
     * @example
     * // Create many Orientacoes
     * const orientacoes = await prisma.orientacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orientacoesCreateManyArgs>(args?: SelectSubset<T, orientacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orientacoes and returns the data saved in the database.
     * @param {orientacoesCreateManyAndReturnArgs} args - Arguments to create many Orientacoes.
     * @example
     * // Create many Orientacoes
     * const orientacoes = await prisma.orientacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orientacoes and only return the `id_orientacao`
     * const orientacoesWithId_orientacaoOnly = await prisma.orientacoes.createManyAndReturn({
     *   select: { id_orientacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orientacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, orientacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orientacoes.
     * @param {orientacoesDeleteArgs} args - Arguments to delete one Orientacoes.
     * @example
     * // Delete one Orientacoes
     * const Orientacoes = await prisma.orientacoes.delete({
     *   where: {
     *     // ... filter to delete one Orientacoes
     *   }
     * })
     * 
     */
    delete<T extends orientacoesDeleteArgs>(args: SelectSubset<T, orientacoesDeleteArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orientacoes.
     * @param {orientacoesUpdateArgs} args - Arguments to update one Orientacoes.
     * @example
     * // Update one Orientacoes
     * const orientacoes = await prisma.orientacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orientacoesUpdateArgs>(args: SelectSubset<T, orientacoesUpdateArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orientacoes.
     * @param {orientacoesDeleteManyArgs} args - Arguments to filter Orientacoes to delete.
     * @example
     * // Delete a few Orientacoes
     * const { count } = await prisma.orientacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orientacoesDeleteManyArgs>(args?: SelectSubset<T, orientacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orientacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orientacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orientacoes
     * const orientacoes = await prisma.orientacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orientacoesUpdateManyArgs>(args: SelectSubset<T, orientacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orientacoes and returns the data updated in the database.
     * @param {orientacoesUpdateManyAndReturnArgs} args - Arguments to update many Orientacoes.
     * @example
     * // Update many Orientacoes
     * const orientacoes = await prisma.orientacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orientacoes and only return the `id_orientacao`
     * const orientacoesWithId_orientacaoOnly = await prisma.orientacoes.updateManyAndReturn({
     *   select: { id_orientacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orientacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, orientacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orientacoes.
     * @param {orientacoesUpsertArgs} args - Arguments to update or create a Orientacoes.
     * @example
     * // Update or create a Orientacoes
     * const orientacoes = await prisma.orientacoes.upsert({
     *   create: {
     *     // ... data to create a Orientacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orientacoes we want to update
     *   }
     * })
     */
    upsert<T extends orientacoesUpsertArgs>(args: SelectSubset<T, orientacoesUpsertArgs<ExtArgs>>): Prisma__orientacoesClient<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orientacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orientacoesCountArgs} args - Arguments to filter Orientacoes to count.
     * @example
     * // Count the number of Orientacoes
     * const count = await prisma.orientacoes.count({
     *   where: {
     *     // ... the filter for the Orientacoes we want to count
     *   }
     * })
    **/
    count<T extends orientacoesCountArgs>(
      args?: Subset<T, orientacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrientacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orientacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrientacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrientacoesAggregateArgs>(args: Subset<T, OrientacoesAggregateArgs>): Prisma.PrismaPromise<GetOrientacoesAggregateType<T>>

    /**
     * Group by Orientacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orientacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orientacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orientacoesGroupByArgs['orderBy'] }
        : { orderBy?: orientacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orientacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrientacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orientacoes model
   */
  readonly fields: orientacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orientacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orientacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prontuarios<T extends prontuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prontuariosDefaultArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orientacoes model
   */
  interface orientacoesFieldRefs {
    readonly id_orientacao: FieldRef<"orientacoes", 'Int'>
    readonly orientacao: FieldRef<"orientacoes", 'String'>
    readonly data_orientacao: FieldRef<"orientacoes", 'DateTime'>
    readonly id_prontuario: FieldRef<"orientacoes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orientacoes findUnique
   */
  export type orientacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * Filter, which orientacoes to fetch.
     */
    where: orientacoesWhereUniqueInput
  }

  /**
   * orientacoes findUniqueOrThrow
   */
  export type orientacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * Filter, which orientacoes to fetch.
     */
    where: orientacoesWhereUniqueInput
  }

  /**
   * orientacoes findFirst
   */
  export type orientacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * Filter, which orientacoes to fetch.
     */
    where?: orientacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orientacoes to fetch.
     */
    orderBy?: orientacoesOrderByWithRelationInput | orientacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orientacoes.
     */
    cursor?: orientacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orientacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orientacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orientacoes.
     */
    distinct?: OrientacoesScalarFieldEnum | OrientacoesScalarFieldEnum[]
  }

  /**
   * orientacoes findFirstOrThrow
   */
  export type orientacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * Filter, which orientacoes to fetch.
     */
    where?: orientacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orientacoes to fetch.
     */
    orderBy?: orientacoesOrderByWithRelationInput | orientacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orientacoes.
     */
    cursor?: orientacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orientacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orientacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orientacoes.
     */
    distinct?: OrientacoesScalarFieldEnum | OrientacoesScalarFieldEnum[]
  }

  /**
   * orientacoes findMany
   */
  export type orientacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * Filter, which orientacoes to fetch.
     */
    where?: orientacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orientacoes to fetch.
     */
    orderBy?: orientacoesOrderByWithRelationInput | orientacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orientacoes.
     */
    cursor?: orientacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orientacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orientacoes.
     */
    skip?: number
    distinct?: OrientacoesScalarFieldEnum | OrientacoesScalarFieldEnum[]
  }

  /**
   * orientacoes create
   */
  export type orientacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a orientacoes.
     */
    data: XOR<orientacoesCreateInput, orientacoesUncheckedCreateInput>
  }

  /**
   * orientacoes createMany
   */
  export type orientacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orientacoes.
     */
    data: orientacoesCreateManyInput | orientacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orientacoes createManyAndReturn
   */
  export type orientacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * The data used to create many orientacoes.
     */
    data: orientacoesCreateManyInput | orientacoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orientacoes update
   */
  export type orientacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a orientacoes.
     */
    data: XOR<orientacoesUpdateInput, orientacoesUncheckedUpdateInput>
    /**
     * Choose, which orientacoes to update.
     */
    where: orientacoesWhereUniqueInput
  }

  /**
   * orientacoes updateMany
   */
  export type orientacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orientacoes.
     */
    data: XOR<orientacoesUpdateManyMutationInput, orientacoesUncheckedUpdateManyInput>
    /**
     * Filter which orientacoes to update
     */
    where?: orientacoesWhereInput
    /**
     * Limit how many orientacoes to update.
     */
    limit?: number
  }

  /**
   * orientacoes updateManyAndReturn
   */
  export type orientacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * The data used to update orientacoes.
     */
    data: XOR<orientacoesUpdateManyMutationInput, orientacoesUncheckedUpdateManyInput>
    /**
     * Filter which orientacoes to update
     */
    where?: orientacoesWhereInput
    /**
     * Limit how many orientacoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orientacoes upsert
   */
  export type orientacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the orientacoes to update in case it exists.
     */
    where: orientacoesWhereUniqueInput
    /**
     * In case the orientacoes found by the `where` argument doesn't exist, create a new orientacoes with this data.
     */
    create: XOR<orientacoesCreateInput, orientacoesUncheckedCreateInput>
    /**
     * In case the orientacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orientacoesUpdateInput, orientacoesUncheckedUpdateInput>
  }

  /**
   * orientacoes delete
   */
  export type orientacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    /**
     * Filter which orientacoes to delete.
     */
    where: orientacoesWhereUniqueInput
  }

  /**
   * orientacoes deleteMany
   */
  export type orientacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orientacoes to delete
     */
    where?: orientacoesWhereInput
    /**
     * Limit how many orientacoes to delete.
     */
    limit?: number
  }

  /**
   * orientacoes without action
   */
  export type orientacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
  }


  /**
   * Model prontuarios
   */

  export type AggregateProntuarios = {
    _count: ProntuariosCountAggregateOutputType | null
    _avg: ProntuariosAvgAggregateOutputType | null
    _sum: ProntuariosSumAggregateOutputType | null
    _min: ProntuariosMinAggregateOutputType | null
    _max: ProntuariosMaxAggregateOutputType | null
  }

  export type ProntuariosAvgAggregateOutputType = {
    id_prontuario: number | null
    id_paciente: number | null
  }

  export type ProntuariosSumAggregateOutputType = {
    id_prontuario: number | null
    id_paciente: number | null
  }

  export type ProntuariosMinAggregateOutputType = {
    id_prontuario: number | null
    data_inicio_tratamento: Date | null
    classificacao: $Enums.classificacao_usuario | null
    id_paciente: number | null
  }

  export type ProntuariosMaxAggregateOutputType = {
    id_prontuario: number | null
    data_inicio_tratamento: Date | null
    classificacao: $Enums.classificacao_usuario | null
    id_paciente: number | null
  }

  export type ProntuariosCountAggregateOutputType = {
    id_prontuario: number
    data_inicio_tratamento: number
    classificacao: number
    id_paciente: number
    _all: number
  }


  export type ProntuariosAvgAggregateInputType = {
    id_prontuario?: true
    id_paciente?: true
  }

  export type ProntuariosSumAggregateInputType = {
    id_prontuario?: true
    id_paciente?: true
  }

  export type ProntuariosMinAggregateInputType = {
    id_prontuario?: true
    data_inicio_tratamento?: true
    classificacao?: true
    id_paciente?: true
  }

  export type ProntuariosMaxAggregateInputType = {
    id_prontuario?: true
    data_inicio_tratamento?: true
    classificacao?: true
    id_paciente?: true
  }

  export type ProntuariosCountAggregateInputType = {
    id_prontuario?: true
    data_inicio_tratamento?: true
    classificacao?: true
    id_paciente?: true
    _all?: true
  }

  export type ProntuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios to aggregate.
     */
    where?: prontuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios to fetch.
     */
    orderBy?: prontuariosOrderByWithRelationInput | prontuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prontuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prontuarios
    **/
    _count?: true | ProntuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProntuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProntuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProntuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProntuariosMaxAggregateInputType
  }

  export type GetProntuariosAggregateType<T extends ProntuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateProntuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProntuarios[P]>
      : GetScalarType<T[P], AggregateProntuarios[P]>
  }




  export type prontuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuariosWhereInput
    orderBy?: prontuariosOrderByWithAggregationInput | prontuariosOrderByWithAggregationInput[]
    by: ProntuariosScalarFieldEnum[] | ProntuariosScalarFieldEnum
    having?: prontuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProntuariosCountAggregateInputType | true
    _avg?: ProntuariosAvgAggregateInputType
    _sum?: ProntuariosSumAggregateInputType
    _min?: ProntuariosMinAggregateInputType
    _max?: ProntuariosMaxAggregateInputType
  }

  export type ProntuariosGroupByOutputType = {
    id_prontuario: number
    data_inicio_tratamento: Date
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
    _count: ProntuariosCountAggregateOutputType | null
    _avg: ProntuariosAvgAggregateOutputType | null
    _sum: ProntuariosSumAggregateOutputType | null
    _min: ProntuariosMinAggregateOutputType | null
    _max: ProntuariosMaxAggregateOutputType | null
  }

  type GetProntuariosGroupByPayload<T extends prontuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProntuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProntuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProntuariosGroupByOutputType[P]>
            : GetScalarType<T[P], ProntuariosGroupByOutputType[P]>
        }
      >
    >


  export type prontuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario?: boolean
    data_inicio_tratamento?: boolean
    classificacao?: boolean
    id_paciente?: boolean
    orientacoes?: boolean | prontuarios$orientacoesArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    prontuarios_avaliacoes?: boolean | prontuarios$prontuarios_avaliacoesArgs<ExtArgs>
    prontuarios_exercicios?: boolean | prontuarios$prontuarios_exerciciosArgs<ExtArgs>
    prontuarios_queixas?: boolean | prontuarios$prontuarios_queixasArgs<ExtArgs>
    prontuarios_sinais?: boolean | prontuarios$prontuarios_sinaisArgs<ExtArgs>
    _count?: boolean | ProntuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios"]>

  export type prontuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario?: boolean
    data_inicio_tratamento?: boolean
    classificacao?: boolean
    id_paciente?: boolean
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios"]>

  export type prontuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario?: boolean
    data_inicio_tratamento?: boolean
    classificacao?: boolean
    id_paciente?: boolean
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios"]>

  export type prontuariosSelectScalar = {
    id_prontuario?: boolean
    data_inicio_tratamento?: boolean
    classificacao?: boolean
    id_paciente?: boolean
  }

  export type prontuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prontuario" | "data_inicio_tratamento" | "classificacao" | "id_paciente", ExtArgs["result"]["prontuarios"]>
  export type prontuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orientacoes?: boolean | prontuarios$orientacoesArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    prontuarios_avaliacoes?: boolean | prontuarios$prontuarios_avaliacoesArgs<ExtArgs>
    prontuarios_exercicios?: boolean | prontuarios$prontuarios_exerciciosArgs<ExtArgs>
    prontuarios_queixas?: boolean | prontuarios$prontuarios_queixasArgs<ExtArgs>
    prontuarios_sinais?: boolean | prontuarios$prontuarios_sinaisArgs<ExtArgs>
    _count?: boolean | ProntuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prontuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }
  export type prontuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }

  export type $prontuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prontuarios"
    objects: {
      orientacoes: Prisma.$orientacoesPayload<ExtArgs>[]
      pacientes: Prisma.$pacientesPayload<ExtArgs>
      prontuarios_avaliacoes: Prisma.$prontuarios_avaliacoesPayload<ExtArgs>[]
      prontuarios_exercicios: Prisma.$prontuarios_exerciciosPayload<ExtArgs>[]
      prontuarios_queixas: Prisma.$prontuarios_queixasPayload<ExtArgs>[]
      prontuarios_sinais: Prisma.$prontuarios_sinaisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prontuario: number
      data_inicio_tratamento: Date
      classificacao: $Enums.classificacao_usuario
      id_paciente: number
    }, ExtArgs["result"]["prontuarios"]>
    composites: {}
  }

  type prontuariosGetPayload<S extends boolean | null | undefined | prontuariosDefaultArgs> = $Result.GetResult<Prisma.$prontuariosPayload, S>

  type prontuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prontuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProntuariosCountAggregateInputType | true
    }

  export interface prontuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prontuarios'], meta: { name: 'prontuarios' } }
    /**
     * Find zero or one Prontuarios that matches the filter.
     * @param {prontuariosFindUniqueArgs} args - Arguments to find a Prontuarios
     * @example
     * // Get one Prontuarios
     * const prontuarios = await prisma.prontuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prontuariosFindUniqueArgs>(args: SelectSubset<T, prontuariosFindUniqueArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prontuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prontuariosFindUniqueOrThrowArgs} args - Arguments to find a Prontuarios
     * @example
     * // Get one Prontuarios
     * const prontuarios = await prisma.prontuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prontuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, prontuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuariosFindFirstArgs} args - Arguments to find a Prontuarios
     * @example
     * // Get one Prontuarios
     * const prontuarios = await prisma.prontuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prontuariosFindFirstArgs>(args?: SelectSubset<T, prontuariosFindFirstArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuariosFindFirstOrThrowArgs} args - Arguments to find a Prontuarios
     * @example
     * // Get one Prontuarios
     * const prontuarios = await prisma.prontuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prontuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, prontuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prontuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prontuarios
     * const prontuarios = await prisma.prontuarios.findMany()
     * 
     * // Get first 10 Prontuarios
     * const prontuarios = await prisma.prontuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_prontuario`
     * const prontuariosWithId_prontuarioOnly = await prisma.prontuarios.findMany({ select: { id_prontuario: true } })
     * 
     */
    findMany<T extends prontuariosFindManyArgs>(args?: SelectSubset<T, prontuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prontuarios.
     * @param {prontuariosCreateArgs} args - Arguments to create a Prontuarios.
     * @example
     * // Create one Prontuarios
     * const Prontuarios = await prisma.prontuarios.create({
     *   data: {
     *     // ... data to create a Prontuarios
     *   }
     * })
     * 
     */
    create<T extends prontuariosCreateArgs>(args: SelectSubset<T, prontuariosCreateArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prontuarios.
     * @param {prontuariosCreateManyArgs} args - Arguments to create many Prontuarios.
     * @example
     * // Create many Prontuarios
     * const prontuarios = await prisma.prontuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prontuariosCreateManyArgs>(args?: SelectSubset<T, prontuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prontuarios and returns the data saved in the database.
     * @param {prontuariosCreateManyAndReturnArgs} args - Arguments to create many Prontuarios.
     * @example
     * // Create many Prontuarios
     * const prontuarios = await prisma.prontuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prontuarios and only return the `id_prontuario`
     * const prontuariosWithId_prontuarioOnly = await prisma.prontuarios.createManyAndReturn({
     *   select: { id_prontuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prontuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, prontuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prontuarios.
     * @param {prontuariosDeleteArgs} args - Arguments to delete one Prontuarios.
     * @example
     * // Delete one Prontuarios
     * const Prontuarios = await prisma.prontuarios.delete({
     *   where: {
     *     // ... filter to delete one Prontuarios
     *   }
     * })
     * 
     */
    delete<T extends prontuariosDeleteArgs>(args: SelectSubset<T, prontuariosDeleteArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prontuarios.
     * @param {prontuariosUpdateArgs} args - Arguments to update one Prontuarios.
     * @example
     * // Update one Prontuarios
     * const prontuarios = await prisma.prontuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prontuariosUpdateArgs>(args: SelectSubset<T, prontuariosUpdateArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prontuarios.
     * @param {prontuariosDeleteManyArgs} args - Arguments to filter Prontuarios to delete.
     * @example
     * // Delete a few Prontuarios
     * const { count } = await prisma.prontuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prontuariosDeleteManyArgs>(args?: SelectSubset<T, prontuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prontuarios
     * const prontuarios = await prisma.prontuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prontuariosUpdateManyArgs>(args: SelectSubset<T, prontuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios and returns the data updated in the database.
     * @param {prontuariosUpdateManyAndReturnArgs} args - Arguments to update many Prontuarios.
     * @example
     * // Update many Prontuarios
     * const prontuarios = await prisma.prontuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prontuarios and only return the `id_prontuario`
     * const prontuariosWithId_prontuarioOnly = await prisma.prontuarios.updateManyAndReturn({
     *   select: { id_prontuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prontuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, prontuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prontuarios.
     * @param {prontuariosUpsertArgs} args - Arguments to update or create a Prontuarios.
     * @example
     * // Update or create a Prontuarios
     * const prontuarios = await prisma.prontuarios.upsert({
     *   create: {
     *     // ... data to create a Prontuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prontuarios we want to update
     *   }
     * })
     */
    upsert<T extends prontuariosUpsertArgs>(args: SelectSubset<T, prontuariosUpsertArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prontuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuariosCountArgs} args - Arguments to filter Prontuarios to count.
     * @example
     * // Count the number of Prontuarios
     * const count = await prisma.prontuarios.count({
     *   where: {
     *     // ... the filter for the Prontuarios we want to count
     *   }
     * })
    **/
    count<T extends prontuariosCountArgs>(
      args?: Subset<T, prontuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProntuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prontuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProntuariosAggregateArgs>(args: Subset<T, ProntuariosAggregateArgs>): Prisma.PrismaPromise<GetProntuariosAggregateType<T>>

    /**
     * Group by Prontuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prontuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prontuariosGroupByArgs['orderBy'] }
        : { orderBy?: prontuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prontuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProntuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prontuarios model
   */
  readonly fields: prontuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prontuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prontuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orientacoes<T extends prontuarios$orientacoesArgs<ExtArgs> = {}>(args?: Subset<T, prontuarios$orientacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orientacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prontuarios_avaliacoes<T extends prontuarios$prontuarios_avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, prontuarios$prontuarios_avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prontuarios_exercicios<T extends prontuarios$prontuarios_exerciciosArgs<ExtArgs> = {}>(args?: Subset<T, prontuarios$prontuarios_exerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prontuarios_queixas<T extends prontuarios$prontuarios_queixasArgs<ExtArgs> = {}>(args?: Subset<T, prontuarios$prontuarios_queixasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prontuarios_sinais<T extends prontuarios$prontuarios_sinaisArgs<ExtArgs> = {}>(args?: Subset<T, prontuarios$prontuarios_sinaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prontuarios model
   */
  interface prontuariosFieldRefs {
    readonly id_prontuario: FieldRef<"prontuarios", 'Int'>
    readonly data_inicio_tratamento: FieldRef<"prontuarios", 'DateTime'>
    readonly classificacao: FieldRef<"prontuarios", 'classificacao_usuario'>
    readonly id_paciente: FieldRef<"prontuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * prontuarios findUnique
   */
  export type prontuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios to fetch.
     */
    where: prontuariosWhereUniqueInput
  }

  /**
   * prontuarios findUniqueOrThrow
   */
  export type prontuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios to fetch.
     */
    where: prontuariosWhereUniqueInput
  }

  /**
   * prontuarios findFirst
   */
  export type prontuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios to fetch.
     */
    where?: prontuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios to fetch.
     */
    orderBy?: prontuariosOrderByWithRelationInput | prontuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios.
     */
    cursor?: prontuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios.
     */
    distinct?: ProntuariosScalarFieldEnum | ProntuariosScalarFieldEnum[]
  }

  /**
   * prontuarios findFirstOrThrow
   */
  export type prontuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios to fetch.
     */
    where?: prontuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios to fetch.
     */
    orderBy?: prontuariosOrderByWithRelationInput | prontuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios.
     */
    cursor?: prontuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios.
     */
    distinct?: ProntuariosScalarFieldEnum | ProntuariosScalarFieldEnum[]
  }

  /**
   * prontuarios findMany
   */
  export type prontuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios to fetch.
     */
    where?: prontuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios to fetch.
     */
    orderBy?: prontuariosOrderByWithRelationInput | prontuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prontuarios.
     */
    cursor?: prontuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios.
     */
    skip?: number
    distinct?: ProntuariosScalarFieldEnum | ProntuariosScalarFieldEnum[]
  }

  /**
   * prontuarios create
   */
  export type prontuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a prontuarios.
     */
    data: XOR<prontuariosCreateInput, prontuariosUncheckedCreateInput>
  }

  /**
   * prontuarios createMany
   */
  export type prontuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prontuarios.
     */
    data: prontuariosCreateManyInput | prontuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prontuarios createManyAndReturn
   */
  export type prontuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * The data used to create many prontuarios.
     */
    data: prontuariosCreateManyInput | prontuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios update
   */
  export type prontuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a prontuarios.
     */
    data: XOR<prontuariosUpdateInput, prontuariosUncheckedUpdateInput>
    /**
     * Choose, which prontuarios to update.
     */
    where: prontuariosWhereUniqueInput
  }

  /**
   * prontuarios updateMany
   */
  export type prontuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prontuarios.
     */
    data: XOR<prontuariosUpdateManyMutationInput, prontuariosUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios to update
     */
    where?: prontuariosWhereInput
    /**
     * Limit how many prontuarios to update.
     */
    limit?: number
  }

  /**
   * prontuarios updateManyAndReturn
   */
  export type prontuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * The data used to update prontuarios.
     */
    data: XOR<prontuariosUpdateManyMutationInput, prontuariosUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios to update
     */
    where?: prontuariosWhereInput
    /**
     * Limit how many prontuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios upsert
   */
  export type prontuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the prontuarios to update in case it exists.
     */
    where: prontuariosWhereUniqueInput
    /**
     * In case the prontuarios found by the `where` argument doesn't exist, create a new prontuarios with this data.
     */
    create: XOR<prontuariosCreateInput, prontuariosUncheckedCreateInput>
    /**
     * In case the prontuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prontuariosUpdateInput, prontuariosUncheckedUpdateInput>
  }

  /**
   * prontuarios delete
   */
  export type prontuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
    /**
     * Filter which prontuarios to delete.
     */
    where: prontuariosWhereUniqueInput
  }

  /**
   * prontuarios deleteMany
   */
  export type prontuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios to delete
     */
    where?: prontuariosWhereInput
    /**
     * Limit how many prontuarios to delete.
     */
    limit?: number
  }

  /**
   * prontuarios.orientacoes
   */
  export type prontuarios$orientacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orientacoes
     */
    select?: orientacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orientacoes
     */
    omit?: orientacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orientacoesInclude<ExtArgs> | null
    where?: orientacoesWhereInput
    orderBy?: orientacoesOrderByWithRelationInput | orientacoesOrderByWithRelationInput[]
    cursor?: orientacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrientacoesScalarFieldEnum | OrientacoesScalarFieldEnum[]
  }

  /**
   * prontuarios.prontuarios_avaliacoes
   */
  export type prontuarios$prontuarios_avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    where?: prontuarios_avaliacoesWhereInput
    orderBy?: prontuarios_avaliacoesOrderByWithRelationInput | prontuarios_avaliacoesOrderByWithRelationInput[]
    cursor?: prontuarios_avaliacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_avaliacoesScalarFieldEnum | Prontuarios_avaliacoesScalarFieldEnum[]
  }

  /**
   * prontuarios.prontuarios_exercicios
   */
  export type prontuarios$prontuarios_exerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    where?: prontuarios_exerciciosWhereInput
    orderBy?: prontuarios_exerciciosOrderByWithRelationInput | prontuarios_exerciciosOrderByWithRelationInput[]
    cursor?: prontuarios_exerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_exerciciosScalarFieldEnum | Prontuarios_exerciciosScalarFieldEnum[]
  }

  /**
   * prontuarios.prontuarios_queixas
   */
  export type prontuarios$prontuarios_queixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    where?: prontuarios_queixasWhereInput
    orderBy?: prontuarios_queixasOrderByWithRelationInput | prontuarios_queixasOrderByWithRelationInput[]
    cursor?: prontuarios_queixasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_queixasScalarFieldEnum | Prontuarios_queixasScalarFieldEnum[]
  }

  /**
   * prontuarios.prontuarios_sinais
   */
  export type prontuarios$prontuarios_sinaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    where?: prontuarios_sinaisWhereInput
    orderBy?: prontuarios_sinaisOrderByWithRelationInput | prontuarios_sinaisOrderByWithRelationInput[]
    cursor?: prontuarios_sinaisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_sinaisScalarFieldEnum | Prontuarios_sinaisScalarFieldEnum[]
  }

  /**
   * prontuarios without action
   */
  export type prontuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios
     */
    select?: prontuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios
     */
    omit?: prontuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuariosInclude<ExtArgs> | null
  }


  /**
   * Model prontuarios_avaliacoes
   */

  export type AggregateProntuarios_avaliacoes = {
    _count: Prontuarios_avaliacoesCountAggregateOutputType | null
    _avg: Prontuarios_avaliacoesAvgAggregateOutputType | null
    _sum: Prontuarios_avaliacoesSumAggregateOutputType | null
    _min: Prontuarios_avaliacoesMinAggregateOutputType | null
    _max: Prontuarios_avaliacoesMaxAggregateOutputType | null
  }

  export type Prontuarios_avaliacoesAvgAggregateOutputType = {
    id_prontuario_avaliacao: number | null
    id_avaliacao: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_avaliacoesSumAggregateOutputType = {
    id_prontuario_avaliacao: number | null
    id_avaliacao: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_avaliacoesMinAggregateOutputType = {
    id_prontuario_avaliacao: number | null
    id_avaliacao: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_avaliacoesMaxAggregateOutputType = {
    id_prontuario_avaliacao: number | null
    id_avaliacao: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_avaliacoesCountAggregateOutputType = {
    id_prontuario_avaliacao: number
    id_avaliacao: number
    id_prontuario: number
    _all: number
  }


  export type Prontuarios_avaliacoesAvgAggregateInputType = {
    id_prontuario_avaliacao?: true
    id_avaliacao?: true
    id_prontuario?: true
  }

  export type Prontuarios_avaliacoesSumAggregateInputType = {
    id_prontuario_avaliacao?: true
    id_avaliacao?: true
    id_prontuario?: true
  }

  export type Prontuarios_avaliacoesMinAggregateInputType = {
    id_prontuario_avaliacao?: true
    id_avaliacao?: true
    id_prontuario?: true
  }

  export type Prontuarios_avaliacoesMaxAggregateInputType = {
    id_prontuario_avaliacao?: true
    id_avaliacao?: true
    id_prontuario?: true
  }

  export type Prontuarios_avaliacoesCountAggregateInputType = {
    id_prontuario_avaliacao?: true
    id_avaliacao?: true
    id_prontuario?: true
    _all?: true
  }

  export type Prontuarios_avaliacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_avaliacoes to aggregate.
     */
    where?: prontuarios_avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_avaliacoes to fetch.
     */
    orderBy?: prontuarios_avaliacoesOrderByWithRelationInput | prontuarios_avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prontuarios_avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prontuarios_avaliacoes
    **/
    _count?: true | Prontuarios_avaliacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prontuarios_avaliacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prontuarios_avaliacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prontuarios_avaliacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prontuarios_avaliacoesMaxAggregateInputType
  }

  export type GetProntuarios_avaliacoesAggregateType<T extends Prontuarios_avaliacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateProntuarios_avaliacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProntuarios_avaliacoes[P]>
      : GetScalarType<T[P], AggregateProntuarios_avaliacoes[P]>
  }




  export type prontuarios_avaliacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_avaliacoesWhereInput
    orderBy?: prontuarios_avaliacoesOrderByWithAggregationInput | prontuarios_avaliacoesOrderByWithAggregationInput[]
    by: Prontuarios_avaliacoesScalarFieldEnum[] | Prontuarios_avaliacoesScalarFieldEnum
    having?: prontuarios_avaliacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prontuarios_avaliacoesCountAggregateInputType | true
    _avg?: Prontuarios_avaliacoesAvgAggregateInputType
    _sum?: Prontuarios_avaliacoesSumAggregateInputType
    _min?: Prontuarios_avaliacoesMinAggregateInputType
    _max?: Prontuarios_avaliacoesMaxAggregateInputType
  }

  export type Prontuarios_avaliacoesGroupByOutputType = {
    id_prontuario_avaliacao: number
    id_avaliacao: number
    id_prontuario: number
    _count: Prontuarios_avaliacoesCountAggregateOutputType | null
    _avg: Prontuarios_avaliacoesAvgAggregateOutputType | null
    _sum: Prontuarios_avaliacoesSumAggregateOutputType | null
    _min: Prontuarios_avaliacoesMinAggregateOutputType | null
    _max: Prontuarios_avaliacoesMaxAggregateOutputType | null
  }

  type GetProntuarios_avaliacoesGroupByPayload<T extends prontuarios_avaliacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prontuarios_avaliacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prontuarios_avaliacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prontuarios_avaliacoesGroupByOutputType[P]>
            : GetScalarType<T[P], Prontuarios_avaliacoesGroupByOutputType[P]>
        }
      >
    >


  export type prontuarios_avaliacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_avaliacao?: boolean
    id_avaliacao?: boolean
    id_prontuario?: boolean
    avaliacoes?: boolean | avaliacoesDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_avaliacoes"]>

  export type prontuarios_avaliacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_avaliacao?: boolean
    id_avaliacao?: boolean
    id_prontuario?: boolean
    avaliacoes?: boolean | avaliacoesDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_avaliacoes"]>

  export type prontuarios_avaliacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_avaliacao?: boolean
    id_avaliacao?: boolean
    id_prontuario?: boolean
    avaliacoes?: boolean | avaliacoesDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_avaliacoes"]>

  export type prontuarios_avaliacoesSelectScalar = {
    id_prontuario_avaliacao?: boolean
    id_avaliacao?: boolean
    id_prontuario?: boolean
  }

  export type prontuarios_avaliacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prontuario_avaliacao" | "id_avaliacao" | "id_prontuario", ExtArgs["result"]["prontuarios_avaliacoes"]>
  export type prontuarios_avaliacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacoes?: boolean | avaliacoesDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }
  export type prontuarios_avaliacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacoes?: boolean | avaliacoesDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }
  export type prontuarios_avaliacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacoes?: boolean | avaliacoesDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }

  export type $prontuarios_avaliacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prontuarios_avaliacoes"
    objects: {
      avaliacoes: Prisma.$avaliacoesPayload<ExtArgs>
      prontuarios: Prisma.$prontuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prontuario_avaliacao: number
      id_avaliacao: number
      id_prontuario: number
    }, ExtArgs["result"]["prontuarios_avaliacoes"]>
    composites: {}
  }

  type prontuarios_avaliacoesGetPayload<S extends boolean | null | undefined | prontuarios_avaliacoesDefaultArgs> = $Result.GetResult<Prisma.$prontuarios_avaliacoesPayload, S>

  type prontuarios_avaliacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prontuarios_avaliacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prontuarios_avaliacoesCountAggregateInputType | true
    }

  export interface prontuarios_avaliacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prontuarios_avaliacoes'], meta: { name: 'prontuarios_avaliacoes' } }
    /**
     * Find zero or one Prontuarios_avaliacoes that matches the filter.
     * @param {prontuarios_avaliacoesFindUniqueArgs} args - Arguments to find a Prontuarios_avaliacoes
     * @example
     * // Get one Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prontuarios_avaliacoesFindUniqueArgs>(args: SelectSubset<T, prontuarios_avaliacoesFindUniqueArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prontuarios_avaliacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prontuarios_avaliacoesFindUniqueOrThrowArgs} args - Arguments to find a Prontuarios_avaliacoes
     * @example
     * // Get one Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prontuarios_avaliacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, prontuarios_avaliacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_avaliacoesFindFirstArgs} args - Arguments to find a Prontuarios_avaliacoes
     * @example
     * // Get one Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prontuarios_avaliacoesFindFirstArgs>(args?: SelectSubset<T, prontuarios_avaliacoesFindFirstArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_avaliacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_avaliacoesFindFirstOrThrowArgs} args - Arguments to find a Prontuarios_avaliacoes
     * @example
     * // Get one Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prontuarios_avaliacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, prontuarios_avaliacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prontuarios_avaliacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_avaliacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.findMany()
     * 
     * // Get first 10 Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.findMany({ take: 10 })
     * 
     * // Only select the `id_prontuario_avaliacao`
     * const prontuarios_avaliacoesWithId_prontuario_avaliacaoOnly = await prisma.prontuarios_avaliacoes.findMany({ select: { id_prontuario_avaliacao: true } })
     * 
     */
    findMany<T extends prontuarios_avaliacoesFindManyArgs>(args?: SelectSubset<T, prontuarios_avaliacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prontuarios_avaliacoes.
     * @param {prontuarios_avaliacoesCreateArgs} args - Arguments to create a Prontuarios_avaliacoes.
     * @example
     * // Create one Prontuarios_avaliacoes
     * const Prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.create({
     *   data: {
     *     // ... data to create a Prontuarios_avaliacoes
     *   }
     * })
     * 
     */
    create<T extends prontuarios_avaliacoesCreateArgs>(args: SelectSubset<T, prontuarios_avaliacoesCreateArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prontuarios_avaliacoes.
     * @param {prontuarios_avaliacoesCreateManyArgs} args - Arguments to create many Prontuarios_avaliacoes.
     * @example
     * // Create many Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prontuarios_avaliacoesCreateManyArgs>(args?: SelectSubset<T, prontuarios_avaliacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prontuarios_avaliacoes and returns the data saved in the database.
     * @param {prontuarios_avaliacoesCreateManyAndReturnArgs} args - Arguments to create many Prontuarios_avaliacoes.
     * @example
     * // Create many Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prontuarios_avaliacoes and only return the `id_prontuario_avaliacao`
     * const prontuarios_avaliacoesWithId_prontuario_avaliacaoOnly = await prisma.prontuarios_avaliacoes.createManyAndReturn({
     *   select: { id_prontuario_avaliacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prontuarios_avaliacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, prontuarios_avaliacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prontuarios_avaliacoes.
     * @param {prontuarios_avaliacoesDeleteArgs} args - Arguments to delete one Prontuarios_avaliacoes.
     * @example
     * // Delete one Prontuarios_avaliacoes
     * const Prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.delete({
     *   where: {
     *     // ... filter to delete one Prontuarios_avaliacoes
     *   }
     * })
     * 
     */
    delete<T extends prontuarios_avaliacoesDeleteArgs>(args: SelectSubset<T, prontuarios_avaliacoesDeleteArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prontuarios_avaliacoes.
     * @param {prontuarios_avaliacoesUpdateArgs} args - Arguments to update one Prontuarios_avaliacoes.
     * @example
     * // Update one Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prontuarios_avaliacoesUpdateArgs>(args: SelectSubset<T, prontuarios_avaliacoesUpdateArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prontuarios_avaliacoes.
     * @param {prontuarios_avaliacoesDeleteManyArgs} args - Arguments to filter Prontuarios_avaliacoes to delete.
     * @example
     * // Delete a few Prontuarios_avaliacoes
     * const { count } = await prisma.prontuarios_avaliacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prontuarios_avaliacoesDeleteManyArgs>(args?: SelectSubset<T, prontuarios_avaliacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_avaliacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prontuarios_avaliacoesUpdateManyArgs>(args: SelectSubset<T, prontuarios_avaliacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_avaliacoes and returns the data updated in the database.
     * @param {prontuarios_avaliacoesUpdateManyAndReturnArgs} args - Arguments to update many Prontuarios_avaliacoes.
     * @example
     * // Update many Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prontuarios_avaliacoes and only return the `id_prontuario_avaliacao`
     * const prontuarios_avaliacoesWithId_prontuario_avaliacaoOnly = await prisma.prontuarios_avaliacoes.updateManyAndReturn({
     *   select: { id_prontuario_avaliacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prontuarios_avaliacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, prontuarios_avaliacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prontuarios_avaliacoes.
     * @param {prontuarios_avaliacoesUpsertArgs} args - Arguments to update or create a Prontuarios_avaliacoes.
     * @example
     * // Update or create a Prontuarios_avaliacoes
     * const prontuarios_avaliacoes = await prisma.prontuarios_avaliacoes.upsert({
     *   create: {
     *     // ... data to create a Prontuarios_avaliacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prontuarios_avaliacoes we want to update
     *   }
     * })
     */
    upsert<T extends prontuarios_avaliacoesUpsertArgs>(args: SelectSubset<T, prontuarios_avaliacoesUpsertArgs<ExtArgs>>): Prisma__prontuarios_avaliacoesClient<$Result.GetResult<Prisma.$prontuarios_avaliacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prontuarios_avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_avaliacoesCountArgs} args - Arguments to filter Prontuarios_avaliacoes to count.
     * @example
     * // Count the number of Prontuarios_avaliacoes
     * const count = await prisma.prontuarios_avaliacoes.count({
     *   where: {
     *     // ... the filter for the Prontuarios_avaliacoes we want to count
     *   }
     * })
    **/
    count<T extends prontuarios_avaliacoesCountArgs>(
      args?: Subset<T, prontuarios_avaliacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prontuarios_avaliacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prontuarios_avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prontuarios_avaliacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prontuarios_avaliacoesAggregateArgs>(args: Subset<T, Prontuarios_avaliacoesAggregateArgs>): Prisma.PrismaPromise<GetProntuarios_avaliacoesAggregateType<T>>

    /**
     * Group by Prontuarios_avaliacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_avaliacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prontuarios_avaliacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prontuarios_avaliacoesGroupByArgs['orderBy'] }
        : { orderBy?: prontuarios_avaliacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prontuarios_avaliacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProntuarios_avaliacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prontuarios_avaliacoes model
   */
  readonly fields: prontuarios_avaliacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prontuarios_avaliacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prontuarios_avaliacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacoes<T extends avaliacoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, avaliacoesDefaultArgs<ExtArgs>>): Prisma__avaliacoesClient<$Result.GetResult<Prisma.$avaliacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prontuarios<T extends prontuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prontuariosDefaultArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prontuarios_avaliacoes model
   */
  interface prontuarios_avaliacoesFieldRefs {
    readonly id_prontuario_avaliacao: FieldRef<"prontuarios_avaliacoes", 'Int'>
    readonly id_avaliacao: FieldRef<"prontuarios_avaliacoes", 'Int'>
    readonly id_prontuario: FieldRef<"prontuarios_avaliacoes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * prontuarios_avaliacoes findUnique
   */
  export type prontuarios_avaliacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_avaliacoes to fetch.
     */
    where: prontuarios_avaliacoesWhereUniqueInput
  }

  /**
   * prontuarios_avaliacoes findUniqueOrThrow
   */
  export type prontuarios_avaliacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_avaliacoes to fetch.
     */
    where: prontuarios_avaliacoesWhereUniqueInput
  }

  /**
   * prontuarios_avaliacoes findFirst
   */
  export type prontuarios_avaliacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_avaliacoes to fetch.
     */
    where?: prontuarios_avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_avaliacoes to fetch.
     */
    orderBy?: prontuarios_avaliacoesOrderByWithRelationInput | prontuarios_avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_avaliacoes.
     */
    cursor?: prontuarios_avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_avaliacoes.
     */
    distinct?: Prontuarios_avaliacoesScalarFieldEnum | Prontuarios_avaliacoesScalarFieldEnum[]
  }

  /**
   * prontuarios_avaliacoes findFirstOrThrow
   */
  export type prontuarios_avaliacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_avaliacoes to fetch.
     */
    where?: prontuarios_avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_avaliacoes to fetch.
     */
    orderBy?: prontuarios_avaliacoesOrderByWithRelationInput | prontuarios_avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_avaliacoes.
     */
    cursor?: prontuarios_avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_avaliacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_avaliacoes.
     */
    distinct?: Prontuarios_avaliacoesScalarFieldEnum | Prontuarios_avaliacoesScalarFieldEnum[]
  }

  /**
   * prontuarios_avaliacoes findMany
   */
  export type prontuarios_avaliacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_avaliacoes to fetch.
     */
    where?: prontuarios_avaliacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_avaliacoes to fetch.
     */
    orderBy?: prontuarios_avaliacoesOrderByWithRelationInput | prontuarios_avaliacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prontuarios_avaliacoes.
     */
    cursor?: prontuarios_avaliacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_avaliacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_avaliacoes.
     */
    skip?: number
    distinct?: Prontuarios_avaliacoesScalarFieldEnum | Prontuarios_avaliacoesScalarFieldEnum[]
  }

  /**
   * prontuarios_avaliacoes create
   */
  export type prontuarios_avaliacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a prontuarios_avaliacoes.
     */
    data: XOR<prontuarios_avaliacoesCreateInput, prontuarios_avaliacoesUncheckedCreateInput>
  }

  /**
   * prontuarios_avaliacoes createMany
   */
  export type prontuarios_avaliacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prontuarios_avaliacoes.
     */
    data: prontuarios_avaliacoesCreateManyInput | prontuarios_avaliacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prontuarios_avaliacoes createManyAndReturn
   */
  export type prontuarios_avaliacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * The data used to create many prontuarios_avaliacoes.
     */
    data: prontuarios_avaliacoesCreateManyInput | prontuarios_avaliacoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_avaliacoes update
   */
  export type prontuarios_avaliacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a prontuarios_avaliacoes.
     */
    data: XOR<prontuarios_avaliacoesUpdateInput, prontuarios_avaliacoesUncheckedUpdateInput>
    /**
     * Choose, which prontuarios_avaliacoes to update.
     */
    where: prontuarios_avaliacoesWhereUniqueInput
  }

  /**
   * prontuarios_avaliacoes updateMany
   */
  export type prontuarios_avaliacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prontuarios_avaliacoes.
     */
    data: XOR<prontuarios_avaliacoesUpdateManyMutationInput, prontuarios_avaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_avaliacoes to update
     */
    where?: prontuarios_avaliacoesWhereInput
    /**
     * Limit how many prontuarios_avaliacoes to update.
     */
    limit?: number
  }

  /**
   * prontuarios_avaliacoes updateManyAndReturn
   */
  export type prontuarios_avaliacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * The data used to update prontuarios_avaliacoes.
     */
    data: XOR<prontuarios_avaliacoesUpdateManyMutationInput, prontuarios_avaliacoesUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_avaliacoes to update
     */
    where?: prontuarios_avaliacoesWhereInput
    /**
     * Limit how many prontuarios_avaliacoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_avaliacoes upsert
   */
  export type prontuarios_avaliacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the prontuarios_avaliacoes to update in case it exists.
     */
    where: prontuarios_avaliacoesWhereUniqueInput
    /**
     * In case the prontuarios_avaliacoes found by the `where` argument doesn't exist, create a new prontuarios_avaliacoes with this data.
     */
    create: XOR<prontuarios_avaliacoesCreateInput, prontuarios_avaliacoesUncheckedCreateInput>
    /**
     * In case the prontuarios_avaliacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prontuarios_avaliacoesUpdateInput, prontuarios_avaliacoesUncheckedUpdateInput>
  }

  /**
   * prontuarios_avaliacoes delete
   */
  export type prontuarios_avaliacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
    /**
     * Filter which prontuarios_avaliacoes to delete.
     */
    where: prontuarios_avaliacoesWhereUniqueInput
  }

  /**
   * prontuarios_avaliacoes deleteMany
   */
  export type prontuarios_avaliacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_avaliacoes to delete
     */
    where?: prontuarios_avaliacoesWhereInput
    /**
     * Limit how many prontuarios_avaliacoes to delete.
     */
    limit?: number
  }

  /**
   * prontuarios_avaliacoes without action
   */
  export type prontuarios_avaliacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_avaliacoes
     */
    select?: prontuarios_avaliacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_avaliacoes
     */
    omit?: prontuarios_avaliacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_avaliacoesInclude<ExtArgs> | null
  }


  /**
   * Model prontuarios_exercicios
   */

  export type AggregateProntuarios_exercicios = {
    _count: Prontuarios_exerciciosCountAggregateOutputType | null
    _avg: Prontuarios_exerciciosAvgAggregateOutputType | null
    _sum: Prontuarios_exerciciosSumAggregateOutputType | null
    _min: Prontuarios_exerciciosMinAggregateOutputType | null
    _max: Prontuarios_exerciciosMaxAggregateOutputType | null
  }

  export type Prontuarios_exerciciosAvgAggregateOutputType = {
    id_prontuario_exercicio: number | null
    id_exercicio: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_exerciciosSumAggregateOutputType = {
    id_prontuario_exercicio: number | null
    id_exercicio: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_exerciciosMinAggregateOutputType = {
    id_prontuario_exercicio: number | null
    id_exercicio: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_exerciciosMaxAggregateOutputType = {
    id_prontuario_exercicio: number | null
    id_exercicio: number | null
    id_prontuario: number | null
  }

  export type Prontuarios_exerciciosCountAggregateOutputType = {
    id_prontuario_exercicio: number
    id_exercicio: number
    id_prontuario: number
    _all: number
  }


  export type Prontuarios_exerciciosAvgAggregateInputType = {
    id_prontuario_exercicio?: true
    id_exercicio?: true
    id_prontuario?: true
  }

  export type Prontuarios_exerciciosSumAggregateInputType = {
    id_prontuario_exercicio?: true
    id_exercicio?: true
    id_prontuario?: true
  }

  export type Prontuarios_exerciciosMinAggregateInputType = {
    id_prontuario_exercicio?: true
    id_exercicio?: true
    id_prontuario?: true
  }

  export type Prontuarios_exerciciosMaxAggregateInputType = {
    id_prontuario_exercicio?: true
    id_exercicio?: true
    id_prontuario?: true
  }

  export type Prontuarios_exerciciosCountAggregateInputType = {
    id_prontuario_exercicio?: true
    id_exercicio?: true
    id_prontuario?: true
    _all?: true
  }

  export type Prontuarios_exerciciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_exercicios to aggregate.
     */
    where?: prontuarios_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_exercicios to fetch.
     */
    orderBy?: prontuarios_exerciciosOrderByWithRelationInput | prontuarios_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prontuarios_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prontuarios_exercicios
    **/
    _count?: true | Prontuarios_exerciciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prontuarios_exerciciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prontuarios_exerciciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prontuarios_exerciciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prontuarios_exerciciosMaxAggregateInputType
  }

  export type GetProntuarios_exerciciosAggregateType<T extends Prontuarios_exerciciosAggregateArgs> = {
        [P in keyof T & keyof AggregateProntuarios_exercicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProntuarios_exercicios[P]>
      : GetScalarType<T[P], AggregateProntuarios_exercicios[P]>
  }




  export type prontuarios_exerciciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_exerciciosWhereInput
    orderBy?: prontuarios_exerciciosOrderByWithAggregationInput | prontuarios_exerciciosOrderByWithAggregationInput[]
    by: Prontuarios_exerciciosScalarFieldEnum[] | Prontuarios_exerciciosScalarFieldEnum
    having?: prontuarios_exerciciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prontuarios_exerciciosCountAggregateInputType | true
    _avg?: Prontuarios_exerciciosAvgAggregateInputType
    _sum?: Prontuarios_exerciciosSumAggregateInputType
    _min?: Prontuarios_exerciciosMinAggregateInputType
    _max?: Prontuarios_exerciciosMaxAggregateInputType
  }

  export type Prontuarios_exerciciosGroupByOutputType = {
    id_prontuario_exercicio: number
    id_exercicio: number
    id_prontuario: number
    _count: Prontuarios_exerciciosCountAggregateOutputType | null
    _avg: Prontuarios_exerciciosAvgAggregateOutputType | null
    _sum: Prontuarios_exerciciosSumAggregateOutputType | null
    _min: Prontuarios_exerciciosMinAggregateOutputType | null
    _max: Prontuarios_exerciciosMaxAggregateOutputType | null
  }

  type GetProntuarios_exerciciosGroupByPayload<T extends prontuarios_exerciciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prontuarios_exerciciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prontuarios_exerciciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prontuarios_exerciciosGroupByOutputType[P]>
            : GetScalarType<T[P], Prontuarios_exerciciosGroupByOutputType[P]>
        }
      >
    >


  export type prontuarios_exerciciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_exercicio?: boolean
    id_exercicio?: boolean
    id_prontuario?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_exercicios"]>

  export type prontuarios_exerciciosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_exercicio?: boolean
    id_exercicio?: boolean
    id_prontuario?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_exercicios"]>

  export type prontuarios_exerciciosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_exercicio?: boolean
    id_exercicio?: boolean
    id_prontuario?: boolean
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_exercicios"]>

  export type prontuarios_exerciciosSelectScalar = {
    id_prontuario_exercicio?: boolean
    id_exercicio?: boolean
    id_prontuario?: boolean
  }

  export type prontuarios_exerciciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prontuario_exercicio" | "id_exercicio" | "id_prontuario", ExtArgs["result"]["prontuarios_exercicios"]>
  export type prontuarios_exerciciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }
  export type prontuarios_exerciciosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }
  export type prontuarios_exerciciosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercicios?: boolean | exerciciosDefaultArgs<ExtArgs>
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
  }

  export type $prontuarios_exerciciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prontuarios_exercicios"
    objects: {
      exercicios: Prisma.$exerciciosPayload<ExtArgs>
      prontuarios: Prisma.$prontuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prontuario_exercicio: number
      id_exercicio: number
      id_prontuario: number
    }, ExtArgs["result"]["prontuarios_exercicios"]>
    composites: {}
  }

  type prontuarios_exerciciosGetPayload<S extends boolean | null | undefined | prontuarios_exerciciosDefaultArgs> = $Result.GetResult<Prisma.$prontuarios_exerciciosPayload, S>

  type prontuarios_exerciciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prontuarios_exerciciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prontuarios_exerciciosCountAggregateInputType | true
    }

  export interface prontuarios_exerciciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prontuarios_exercicios'], meta: { name: 'prontuarios_exercicios' } }
    /**
     * Find zero or one Prontuarios_exercicios that matches the filter.
     * @param {prontuarios_exerciciosFindUniqueArgs} args - Arguments to find a Prontuarios_exercicios
     * @example
     * // Get one Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prontuarios_exerciciosFindUniqueArgs>(args: SelectSubset<T, prontuarios_exerciciosFindUniqueArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prontuarios_exercicios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prontuarios_exerciciosFindUniqueOrThrowArgs} args - Arguments to find a Prontuarios_exercicios
     * @example
     * // Get one Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prontuarios_exerciciosFindUniqueOrThrowArgs>(args: SelectSubset<T, prontuarios_exerciciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_exerciciosFindFirstArgs} args - Arguments to find a Prontuarios_exercicios
     * @example
     * // Get one Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prontuarios_exerciciosFindFirstArgs>(args?: SelectSubset<T, prontuarios_exerciciosFindFirstArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_exercicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_exerciciosFindFirstOrThrowArgs} args - Arguments to find a Prontuarios_exercicios
     * @example
     * // Get one Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prontuarios_exerciciosFindFirstOrThrowArgs>(args?: SelectSubset<T, prontuarios_exerciciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prontuarios_exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_exerciciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.findMany()
     * 
     * // Get first 10 Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.findMany({ take: 10 })
     * 
     * // Only select the `id_prontuario_exercicio`
     * const prontuarios_exerciciosWithId_prontuario_exercicioOnly = await prisma.prontuarios_exercicios.findMany({ select: { id_prontuario_exercicio: true } })
     * 
     */
    findMany<T extends prontuarios_exerciciosFindManyArgs>(args?: SelectSubset<T, prontuarios_exerciciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prontuarios_exercicios.
     * @param {prontuarios_exerciciosCreateArgs} args - Arguments to create a Prontuarios_exercicios.
     * @example
     * // Create one Prontuarios_exercicios
     * const Prontuarios_exercicios = await prisma.prontuarios_exercicios.create({
     *   data: {
     *     // ... data to create a Prontuarios_exercicios
     *   }
     * })
     * 
     */
    create<T extends prontuarios_exerciciosCreateArgs>(args: SelectSubset<T, prontuarios_exerciciosCreateArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prontuarios_exercicios.
     * @param {prontuarios_exerciciosCreateManyArgs} args - Arguments to create many Prontuarios_exercicios.
     * @example
     * // Create many Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prontuarios_exerciciosCreateManyArgs>(args?: SelectSubset<T, prontuarios_exerciciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prontuarios_exercicios and returns the data saved in the database.
     * @param {prontuarios_exerciciosCreateManyAndReturnArgs} args - Arguments to create many Prontuarios_exercicios.
     * @example
     * // Create many Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prontuarios_exercicios and only return the `id_prontuario_exercicio`
     * const prontuarios_exerciciosWithId_prontuario_exercicioOnly = await prisma.prontuarios_exercicios.createManyAndReturn({
     *   select: { id_prontuario_exercicio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prontuarios_exerciciosCreateManyAndReturnArgs>(args?: SelectSubset<T, prontuarios_exerciciosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prontuarios_exercicios.
     * @param {prontuarios_exerciciosDeleteArgs} args - Arguments to delete one Prontuarios_exercicios.
     * @example
     * // Delete one Prontuarios_exercicios
     * const Prontuarios_exercicios = await prisma.prontuarios_exercicios.delete({
     *   where: {
     *     // ... filter to delete one Prontuarios_exercicios
     *   }
     * })
     * 
     */
    delete<T extends prontuarios_exerciciosDeleteArgs>(args: SelectSubset<T, prontuarios_exerciciosDeleteArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prontuarios_exercicios.
     * @param {prontuarios_exerciciosUpdateArgs} args - Arguments to update one Prontuarios_exercicios.
     * @example
     * // Update one Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prontuarios_exerciciosUpdateArgs>(args: SelectSubset<T, prontuarios_exerciciosUpdateArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prontuarios_exercicios.
     * @param {prontuarios_exerciciosDeleteManyArgs} args - Arguments to filter Prontuarios_exercicios to delete.
     * @example
     * // Delete a few Prontuarios_exercicios
     * const { count } = await prisma.prontuarios_exercicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prontuarios_exerciciosDeleteManyArgs>(args?: SelectSubset<T, prontuarios_exerciciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_exerciciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prontuarios_exerciciosUpdateManyArgs>(args: SelectSubset<T, prontuarios_exerciciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_exercicios and returns the data updated in the database.
     * @param {prontuarios_exerciciosUpdateManyAndReturnArgs} args - Arguments to update many Prontuarios_exercicios.
     * @example
     * // Update many Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prontuarios_exercicios and only return the `id_prontuario_exercicio`
     * const prontuarios_exerciciosWithId_prontuario_exercicioOnly = await prisma.prontuarios_exercicios.updateManyAndReturn({
     *   select: { id_prontuario_exercicio: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prontuarios_exerciciosUpdateManyAndReturnArgs>(args: SelectSubset<T, prontuarios_exerciciosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prontuarios_exercicios.
     * @param {prontuarios_exerciciosUpsertArgs} args - Arguments to update or create a Prontuarios_exercicios.
     * @example
     * // Update or create a Prontuarios_exercicios
     * const prontuarios_exercicios = await prisma.prontuarios_exercicios.upsert({
     *   create: {
     *     // ... data to create a Prontuarios_exercicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prontuarios_exercicios we want to update
     *   }
     * })
     */
    upsert<T extends prontuarios_exerciciosUpsertArgs>(args: SelectSubset<T, prontuarios_exerciciosUpsertArgs<ExtArgs>>): Prisma__prontuarios_exerciciosClient<$Result.GetResult<Prisma.$prontuarios_exerciciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prontuarios_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_exerciciosCountArgs} args - Arguments to filter Prontuarios_exercicios to count.
     * @example
     * // Count the number of Prontuarios_exercicios
     * const count = await prisma.prontuarios_exercicios.count({
     *   where: {
     *     // ... the filter for the Prontuarios_exercicios we want to count
     *   }
     * })
    **/
    count<T extends prontuarios_exerciciosCountArgs>(
      args?: Subset<T, prontuarios_exerciciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prontuarios_exerciciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prontuarios_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prontuarios_exerciciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prontuarios_exerciciosAggregateArgs>(args: Subset<T, Prontuarios_exerciciosAggregateArgs>): Prisma.PrismaPromise<GetProntuarios_exerciciosAggregateType<T>>

    /**
     * Group by Prontuarios_exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_exerciciosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prontuarios_exerciciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prontuarios_exerciciosGroupByArgs['orderBy'] }
        : { orderBy?: prontuarios_exerciciosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prontuarios_exerciciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProntuarios_exerciciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prontuarios_exercicios model
   */
  readonly fields: prontuarios_exerciciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prontuarios_exercicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prontuarios_exerciciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercicios<T extends exerciciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciciosDefaultArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prontuarios<T extends prontuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prontuariosDefaultArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prontuarios_exercicios model
   */
  interface prontuarios_exerciciosFieldRefs {
    readonly id_prontuario_exercicio: FieldRef<"prontuarios_exercicios", 'Int'>
    readonly id_exercicio: FieldRef<"prontuarios_exercicios", 'Int'>
    readonly id_prontuario: FieldRef<"prontuarios_exercicios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * prontuarios_exercicios findUnique
   */
  export type prontuarios_exerciciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_exercicios to fetch.
     */
    where: prontuarios_exerciciosWhereUniqueInput
  }

  /**
   * prontuarios_exercicios findUniqueOrThrow
   */
  export type prontuarios_exerciciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_exercicios to fetch.
     */
    where: prontuarios_exerciciosWhereUniqueInput
  }

  /**
   * prontuarios_exercicios findFirst
   */
  export type prontuarios_exerciciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_exercicios to fetch.
     */
    where?: prontuarios_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_exercicios to fetch.
     */
    orderBy?: prontuarios_exerciciosOrderByWithRelationInput | prontuarios_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_exercicios.
     */
    cursor?: prontuarios_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_exercicios.
     */
    distinct?: Prontuarios_exerciciosScalarFieldEnum | Prontuarios_exerciciosScalarFieldEnum[]
  }

  /**
   * prontuarios_exercicios findFirstOrThrow
   */
  export type prontuarios_exerciciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_exercicios to fetch.
     */
    where?: prontuarios_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_exercicios to fetch.
     */
    orderBy?: prontuarios_exerciciosOrderByWithRelationInput | prontuarios_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_exercicios.
     */
    cursor?: prontuarios_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_exercicios.
     */
    distinct?: Prontuarios_exerciciosScalarFieldEnum | Prontuarios_exerciciosScalarFieldEnum[]
  }

  /**
   * prontuarios_exercicios findMany
   */
  export type prontuarios_exerciciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_exercicios to fetch.
     */
    where?: prontuarios_exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_exercicios to fetch.
     */
    orderBy?: prontuarios_exerciciosOrderByWithRelationInput | prontuarios_exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prontuarios_exercicios.
     */
    cursor?: prontuarios_exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_exercicios.
     */
    skip?: number
    distinct?: Prontuarios_exerciciosScalarFieldEnum | Prontuarios_exerciciosScalarFieldEnum[]
  }

  /**
   * prontuarios_exercicios create
   */
  export type prontuarios_exerciciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to create a prontuarios_exercicios.
     */
    data: XOR<prontuarios_exerciciosCreateInput, prontuarios_exerciciosUncheckedCreateInput>
  }

  /**
   * prontuarios_exercicios createMany
   */
  export type prontuarios_exerciciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prontuarios_exercicios.
     */
    data: prontuarios_exerciciosCreateManyInput | prontuarios_exerciciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prontuarios_exercicios createManyAndReturn
   */
  export type prontuarios_exerciciosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * The data used to create many prontuarios_exercicios.
     */
    data: prontuarios_exerciciosCreateManyInput | prontuarios_exerciciosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_exercicios update
   */
  export type prontuarios_exerciciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to update a prontuarios_exercicios.
     */
    data: XOR<prontuarios_exerciciosUpdateInput, prontuarios_exerciciosUncheckedUpdateInput>
    /**
     * Choose, which prontuarios_exercicios to update.
     */
    where: prontuarios_exerciciosWhereUniqueInput
  }

  /**
   * prontuarios_exercicios updateMany
   */
  export type prontuarios_exerciciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prontuarios_exercicios.
     */
    data: XOR<prontuarios_exerciciosUpdateManyMutationInput, prontuarios_exerciciosUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_exercicios to update
     */
    where?: prontuarios_exerciciosWhereInput
    /**
     * Limit how many prontuarios_exercicios to update.
     */
    limit?: number
  }

  /**
   * prontuarios_exercicios updateManyAndReturn
   */
  export type prontuarios_exerciciosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * The data used to update prontuarios_exercicios.
     */
    data: XOR<prontuarios_exerciciosUpdateManyMutationInput, prontuarios_exerciciosUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_exercicios to update
     */
    where?: prontuarios_exerciciosWhereInput
    /**
     * Limit how many prontuarios_exercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_exercicios upsert
   */
  export type prontuarios_exerciciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * The filter to search for the prontuarios_exercicios to update in case it exists.
     */
    where: prontuarios_exerciciosWhereUniqueInput
    /**
     * In case the prontuarios_exercicios found by the `where` argument doesn't exist, create a new prontuarios_exercicios with this data.
     */
    create: XOR<prontuarios_exerciciosCreateInput, prontuarios_exerciciosUncheckedCreateInput>
    /**
     * In case the prontuarios_exercicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prontuarios_exerciciosUpdateInput, prontuarios_exerciciosUncheckedUpdateInput>
  }

  /**
   * prontuarios_exercicios delete
   */
  export type prontuarios_exerciciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
    /**
     * Filter which prontuarios_exercicios to delete.
     */
    where: prontuarios_exerciciosWhereUniqueInput
  }

  /**
   * prontuarios_exercicios deleteMany
   */
  export type prontuarios_exerciciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_exercicios to delete
     */
    where?: prontuarios_exerciciosWhereInput
    /**
     * Limit how many prontuarios_exercicios to delete.
     */
    limit?: number
  }

  /**
   * prontuarios_exercicios without action
   */
  export type prontuarios_exerciciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_exercicios
     */
    select?: prontuarios_exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_exercicios
     */
    omit?: prontuarios_exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_exerciciosInclude<ExtArgs> | null
  }


  /**
   * Model prontuarios_queixas
   */

  export type AggregateProntuarios_queixas = {
    _count: Prontuarios_queixasCountAggregateOutputType | null
    _avg: Prontuarios_queixasAvgAggregateOutputType | null
    _sum: Prontuarios_queixasSumAggregateOutputType | null
    _min: Prontuarios_queixasMinAggregateOutputType | null
    _max: Prontuarios_queixasMaxAggregateOutputType | null
  }

  export type Prontuarios_queixasAvgAggregateOutputType = {
    id_prontuario_queixa: number | null
    id_prontuario: number | null
    id_queixa: number | null
  }

  export type Prontuarios_queixasSumAggregateOutputType = {
    id_prontuario_queixa: number | null
    id_prontuario: number | null
    id_queixa: number | null
  }

  export type Prontuarios_queixasMinAggregateOutputType = {
    id_prontuario_queixa: number | null
    id_prontuario: number | null
    id_queixa: number | null
  }

  export type Prontuarios_queixasMaxAggregateOutputType = {
    id_prontuario_queixa: number | null
    id_prontuario: number | null
    id_queixa: number | null
  }

  export type Prontuarios_queixasCountAggregateOutputType = {
    id_prontuario_queixa: number
    id_prontuario: number
    id_queixa: number
    _all: number
  }


  export type Prontuarios_queixasAvgAggregateInputType = {
    id_prontuario_queixa?: true
    id_prontuario?: true
    id_queixa?: true
  }

  export type Prontuarios_queixasSumAggregateInputType = {
    id_prontuario_queixa?: true
    id_prontuario?: true
    id_queixa?: true
  }

  export type Prontuarios_queixasMinAggregateInputType = {
    id_prontuario_queixa?: true
    id_prontuario?: true
    id_queixa?: true
  }

  export type Prontuarios_queixasMaxAggregateInputType = {
    id_prontuario_queixa?: true
    id_prontuario?: true
    id_queixa?: true
  }

  export type Prontuarios_queixasCountAggregateInputType = {
    id_prontuario_queixa?: true
    id_prontuario?: true
    id_queixa?: true
    _all?: true
  }

  export type Prontuarios_queixasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_queixas to aggregate.
     */
    where?: prontuarios_queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_queixas to fetch.
     */
    orderBy?: prontuarios_queixasOrderByWithRelationInput | prontuarios_queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prontuarios_queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_queixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prontuarios_queixas
    **/
    _count?: true | Prontuarios_queixasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prontuarios_queixasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prontuarios_queixasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prontuarios_queixasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prontuarios_queixasMaxAggregateInputType
  }

  export type GetProntuarios_queixasAggregateType<T extends Prontuarios_queixasAggregateArgs> = {
        [P in keyof T & keyof AggregateProntuarios_queixas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProntuarios_queixas[P]>
      : GetScalarType<T[P], AggregateProntuarios_queixas[P]>
  }




  export type prontuarios_queixasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_queixasWhereInput
    orderBy?: prontuarios_queixasOrderByWithAggregationInput | prontuarios_queixasOrderByWithAggregationInput[]
    by: Prontuarios_queixasScalarFieldEnum[] | Prontuarios_queixasScalarFieldEnum
    having?: prontuarios_queixasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prontuarios_queixasCountAggregateInputType | true
    _avg?: Prontuarios_queixasAvgAggregateInputType
    _sum?: Prontuarios_queixasSumAggregateInputType
    _min?: Prontuarios_queixasMinAggregateInputType
    _max?: Prontuarios_queixasMaxAggregateInputType
  }

  export type Prontuarios_queixasGroupByOutputType = {
    id_prontuario_queixa: number
    id_prontuario: number
    id_queixa: number
    _count: Prontuarios_queixasCountAggregateOutputType | null
    _avg: Prontuarios_queixasAvgAggregateOutputType | null
    _sum: Prontuarios_queixasSumAggregateOutputType | null
    _min: Prontuarios_queixasMinAggregateOutputType | null
    _max: Prontuarios_queixasMaxAggregateOutputType | null
  }

  type GetProntuarios_queixasGroupByPayload<T extends prontuarios_queixasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prontuarios_queixasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prontuarios_queixasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prontuarios_queixasGroupByOutputType[P]>
            : GetScalarType<T[P], Prontuarios_queixasGroupByOutputType[P]>
        }
      >
    >


  export type prontuarios_queixasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_queixa?: boolean
    id_prontuario?: boolean
    id_queixa?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    queixas?: boolean | queixasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_queixas"]>

  export type prontuarios_queixasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_queixa?: boolean
    id_prontuario?: boolean
    id_queixa?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    queixas?: boolean | queixasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_queixas"]>

  export type prontuarios_queixasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_queixa?: boolean
    id_prontuario?: boolean
    id_queixa?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    queixas?: boolean | queixasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_queixas"]>

  export type prontuarios_queixasSelectScalar = {
    id_prontuario_queixa?: boolean
    id_prontuario?: boolean
    id_queixa?: boolean
  }

  export type prontuarios_queixasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prontuario_queixa" | "id_prontuario" | "id_queixa", ExtArgs["result"]["prontuarios_queixas"]>
  export type prontuarios_queixasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    queixas?: boolean | queixasDefaultArgs<ExtArgs>
  }
  export type prontuarios_queixasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    queixas?: boolean | queixasDefaultArgs<ExtArgs>
  }
  export type prontuarios_queixasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    queixas?: boolean | queixasDefaultArgs<ExtArgs>
  }

  export type $prontuarios_queixasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prontuarios_queixas"
    objects: {
      prontuarios: Prisma.$prontuariosPayload<ExtArgs>
      queixas: Prisma.$queixasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prontuario_queixa: number
      id_prontuario: number
      id_queixa: number
    }, ExtArgs["result"]["prontuarios_queixas"]>
    composites: {}
  }

  type prontuarios_queixasGetPayload<S extends boolean | null | undefined | prontuarios_queixasDefaultArgs> = $Result.GetResult<Prisma.$prontuarios_queixasPayload, S>

  type prontuarios_queixasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prontuarios_queixasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prontuarios_queixasCountAggregateInputType | true
    }

  export interface prontuarios_queixasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prontuarios_queixas'], meta: { name: 'prontuarios_queixas' } }
    /**
     * Find zero or one Prontuarios_queixas that matches the filter.
     * @param {prontuarios_queixasFindUniqueArgs} args - Arguments to find a Prontuarios_queixas
     * @example
     * // Get one Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prontuarios_queixasFindUniqueArgs>(args: SelectSubset<T, prontuarios_queixasFindUniqueArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prontuarios_queixas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prontuarios_queixasFindUniqueOrThrowArgs} args - Arguments to find a Prontuarios_queixas
     * @example
     * // Get one Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prontuarios_queixasFindUniqueOrThrowArgs>(args: SelectSubset<T, prontuarios_queixasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_queixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_queixasFindFirstArgs} args - Arguments to find a Prontuarios_queixas
     * @example
     * // Get one Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prontuarios_queixasFindFirstArgs>(args?: SelectSubset<T, prontuarios_queixasFindFirstArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_queixas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_queixasFindFirstOrThrowArgs} args - Arguments to find a Prontuarios_queixas
     * @example
     * // Get one Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prontuarios_queixasFindFirstOrThrowArgs>(args?: SelectSubset<T, prontuarios_queixasFindFirstOrThrowArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prontuarios_queixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_queixasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.findMany()
     * 
     * // Get first 10 Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.findMany({ take: 10 })
     * 
     * // Only select the `id_prontuario_queixa`
     * const prontuarios_queixasWithId_prontuario_queixaOnly = await prisma.prontuarios_queixas.findMany({ select: { id_prontuario_queixa: true } })
     * 
     */
    findMany<T extends prontuarios_queixasFindManyArgs>(args?: SelectSubset<T, prontuarios_queixasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prontuarios_queixas.
     * @param {prontuarios_queixasCreateArgs} args - Arguments to create a Prontuarios_queixas.
     * @example
     * // Create one Prontuarios_queixas
     * const Prontuarios_queixas = await prisma.prontuarios_queixas.create({
     *   data: {
     *     // ... data to create a Prontuarios_queixas
     *   }
     * })
     * 
     */
    create<T extends prontuarios_queixasCreateArgs>(args: SelectSubset<T, prontuarios_queixasCreateArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prontuarios_queixas.
     * @param {prontuarios_queixasCreateManyArgs} args - Arguments to create many Prontuarios_queixas.
     * @example
     * // Create many Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prontuarios_queixasCreateManyArgs>(args?: SelectSubset<T, prontuarios_queixasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prontuarios_queixas and returns the data saved in the database.
     * @param {prontuarios_queixasCreateManyAndReturnArgs} args - Arguments to create many Prontuarios_queixas.
     * @example
     * // Create many Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prontuarios_queixas and only return the `id_prontuario_queixa`
     * const prontuarios_queixasWithId_prontuario_queixaOnly = await prisma.prontuarios_queixas.createManyAndReturn({
     *   select: { id_prontuario_queixa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prontuarios_queixasCreateManyAndReturnArgs>(args?: SelectSubset<T, prontuarios_queixasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prontuarios_queixas.
     * @param {prontuarios_queixasDeleteArgs} args - Arguments to delete one Prontuarios_queixas.
     * @example
     * // Delete one Prontuarios_queixas
     * const Prontuarios_queixas = await prisma.prontuarios_queixas.delete({
     *   where: {
     *     // ... filter to delete one Prontuarios_queixas
     *   }
     * })
     * 
     */
    delete<T extends prontuarios_queixasDeleteArgs>(args: SelectSubset<T, prontuarios_queixasDeleteArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prontuarios_queixas.
     * @param {prontuarios_queixasUpdateArgs} args - Arguments to update one Prontuarios_queixas.
     * @example
     * // Update one Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prontuarios_queixasUpdateArgs>(args: SelectSubset<T, prontuarios_queixasUpdateArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prontuarios_queixas.
     * @param {prontuarios_queixasDeleteManyArgs} args - Arguments to filter Prontuarios_queixas to delete.
     * @example
     * // Delete a few Prontuarios_queixas
     * const { count } = await prisma.prontuarios_queixas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prontuarios_queixasDeleteManyArgs>(args?: SelectSubset<T, prontuarios_queixasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_queixasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prontuarios_queixasUpdateManyArgs>(args: SelectSubset<T, prontuarios_queixasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_queixas and returns the data updated in the database.
     * @param {prontuarios_queixasUpdateManyAndReturnArgs} args - Arguments to update many Prontuarios_queixas.
     * @example
     * // Update many Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prontuarios_queixas and only return the `id_prontuario_queixa`
     * const prontuarios_queixasWithId_prontuario_queixaOnly = await prisma.prontuarios_queixas.updateManyAndReturn({
     *   select: { id_prontuario_queixa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prontuarios_queixasUpdateManyAndReturnArgs>(args: SelectSubset<T, prontuarios_queixasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prontuarios_queixas.
     * @param {prontuarios_queixasUpsertArgs} args - Arguments to update or create a Prontuarios_queixas.
     * @example
     * // Update or create a Prontuarios_queixas
     * const prontuarios_queixas = await prisma.prontuarios_queixas.upsert({
     *   create: {
     *     // ... data to create a Prontuarios_queixas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prontuarios_queixas we want to update
     *   }
     * })
     */
    upsert<T extends prontuarios_queixasUpsertArgs>(args: SelectSubset<T, prontuarios_queixasUpsertArgs<ExtArgs>>): Prisma__prontuarios_queixasClient<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prontuarios_queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_queixasCountArgs} args - Arguments to filter Prontuarios_queixas to count.
     * @example
     * // Count the number of Prontuarios_queixas
     * const count = await prisma.prontuarios_queixas.count({
     *   where: {
     *     // ... the filter for the Prontuarios_queixas we want to count
     *   }
     * })
    **/
    count<T extends prontuarios_queixasCountArgs>(
      args?: Subset<T, prontuarios_queixasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prontuarios_queixasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prontuarios_queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prontuarios_queixasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prontuarios_queixasAggregateArgs>(args: Subset<T, Prontuarios_queixasAggregateArgs>): Prisma.PrismaPromise<GetProntuarios_queixasAggregateType<T>>

    /**
     * Group by Prontuarios_queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_queixasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prontuarios_queixasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prontuarios_queixasGroupByArgs['orderBy'] }
        : { orderBy?: prontuarios_queixasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prontuarios_queixasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProntuarios_queixasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prontuarios_queixas model
   */
  readonly fields: prontuarios_queixasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prontuarios_queixas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prontuarios_queixasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prontuarios<T extends prontuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prontuariosDefaultArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    queixas<T extends queixasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, queixasDefaultArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prontuarios_queixas model
   */
  interface prontuarios_queixasFieldRefs {
    readonly id_prontuario_queixa: FieldRef<"prontuarios_queixas", 'Int'>
    readonly id_prontuario: FieldRef<"prontuarios_queixas", 'Int'>
    readonly id_queixa: FieldRef<"prontuarios_queixas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * prontuarios_queixas findUnique
   */
  export type prontuarios_queixasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_queixas to fetch.
     */
    where: prontuarios_queixasWhereUniqueInput
  }

  /**
   * prontuarios_queixas findUniqueOrThrow
   */
  export type prontuarios_queixasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_queixas to fetch.
     */
    where: prontuarios_queixasWhereUniqueInput
  }

  /**
   * prontuarios_queixas findFirst
   */
  export type prontuarios_queixasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_queixas to fetch.
     */
    where?: prontuarios_queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_queixas to fetch.
     */
    orderBy?: prontuarios_queixasOrderByWithRelationInput | prontuarios_queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_queixas.
     */
    cursor?: prontuarios_queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_queixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_queixas.
     */
    distinct?: Prontuarios_queixasScalarFieldEnum | Prontuarios_queixasScalarFieldEnum[]
  }

  /**
   * prontuarios_queixas findFirstOrThrow
   */
  export type prontuarios_queixasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_queixas to fetch.
     */
    where?: prontuarios_queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_queixas to fetch.
     */
    orderBy?: prontuarios_queixasOrderByWithRelationInput | prontuarios_queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_queixas.
     */
    cursor?: prontuarios_queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_queixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_queixas.
     */
    distinct?: Prontuarios_queixasScalarFieldEnum | Prontuarios_queixasScalarFieldEnum[]
  }

  /**
   * prontuarios_queixas findMany
   */
  export type prontuarios_queixasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_queixas to fetch.
     */
    where?: prontuarios_queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_queixas to fetch.
     */
    orderBy?: prontuarios_queixasOrderByWithRelationInput | prontuarios_queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prontuarios_queixas.
     */
    cursor?: prontuarios_queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_queixas.
     */
    skip?: number
    distinct?: Prontuarios_queixasScalarFieldEnum | Prontuarios_queixasScalarFieldEnum[]
  }

  /**
   * prontuarios_queixas create
   */
  export type prontuarios_queixasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * The data needed to create a prontuarios_queixas.
     */
    data: XOR<prontuarios_queixasCreateInput, prontuarios_queixasUncheckedCreateInput>
  }

  /**
   * prontuarios_queixas createMany
   */
  export type prontuarios_queixasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prontuarios_queixas.
     */
    data: prontuarios_queixasCreateManyInput | prontuarios_queixasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prontuarios_queixas createManyAndReturn
   */
  export type prontuarios_queixasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * The data used to create many prontuarios_queixas.
     */
    data: prontuarios_queixasCreateManyInput | prontuarios_queixasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_queixas update
   */
  export type prontuarios_queixasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * The data needed to update a prontuarios_queixas.
     */
    data: XOR<prontuarios_queixasUpdateInput, prontuarios_queixasUncheckedUpdateInput>
    /**
     * Choose, which prontuarios_queixas to update.
     */
    where: prontuarios_queixasWhereUniqueInput
  }

  /**
   * prontuarios_queixas updateMany
   */
  export type prontuarios_queixasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prontuarios_queixas.
     */
    data: XOR<prontuarios_queixasUpdateManyMutationInput, prontuarios_queixasUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_queixas to update
     */
    where?: prontuarios_queixasWhereInput
    /**
     * Limit how many prontuarios_queixas to update.
     */
    limit?: number
  }

  /**
   * prontuarios_queixas updateManyAndReturn
   */
  export type prontuarios_queixasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * The data used to update prontuarios_queixas.
     */
    data: XOR<prontuarios_queixasUpdateManyMutationInput, prontuarios_queixasUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_queixas to update
     */
    where?: prontuarios_queixasWhereInput
    /**
     * Limit how many prontuarios_queixas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_queixas upsert
   */
  export type prontuarios_queixasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * The filter to search for the prontuarios_queixas to update in case it exists.
     */
    where: prontuarios_queixasWhereUniqueInput
    /**
     * In case the prontuarios_queixas found by the `where` argument doesn't exist, create a new prontuarios_queixas with this data.
     */
    create: XOR<prontuarios_queixasCreateInput, prontuarios_queixasUncheckedCreateInput>
    /**
     * In case the prontuarios_queixas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prontuarios_queixasUpdateInput, prontuarios_queixasUncheckedUpdateInput>
  }

  /**
   * prontuarios_queixas delete
   */
  export type prontuarios_queixasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    /**
     * Filter which prontuarios_queixas to delete.
     */
    where: prontuarios_queixasWhereUniqueInput
  }

  /**
   * prontuarios_queixas deleteMany
   */
  export type prontuarios_queixasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_queixas to delete
     */
    where?: prontuarios_queixasWhereInput
    /**
     * Limit how many prontuarios_queixas to delete.
     */
    limit?: number
  }

  /**
   * prontuarios_queixas without action
   */
  export type prontuarios_queixasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
  }


  /**
   * Model prontuarios_sinais
   */

  export type AggregateProntuarios_sinais = {
    _count: Prontuarios_sinaisCountAggregateOutputType | null
    _avg: Prontuarios_sinaisAvgAggregateOutputType | null
    _sum: Prontuarios_sinaisSumAggregateOutputType | null
    _min: Prontuarios_sinaisMinAggregateOutputType | null
    _max: Prontuarios_sinaisMaxAggregateOutputType | null
  }

  export type Prontuarios_sinaisAvgAggregateOutputType = {
    id_prontuario_sinal: number | null
    id_prontuario: number | null
    id_sinal: number | null
  }

  export type Prontuarios_sinaisSumAggregateOutputType = {
    id_prontuario_sinal: number | null
    id_prontuario: number | null
    id_sinal: number | null
  }

  export type Prontuarios_sinaisMinAggregateOutputType = {
    id_prontuario_sinal: number | null
    id_prontuario: number | null
    id_sinal: number | null
  }

  export type Prontuarios_sinaisMaxAggregateOutputType = {
    id_prontuario_sinal: number | null
    id_prontuario: number | null
    id_sinal: number | null
  }

  export type Prontuarios_sinaisCountAggregateOutputType = {
    id_prontuario_sinal: number
    id_prontuario: number
    id_sinal: number
    _all: number
  }


  export type Prontuarios_sinaisAvgAggregateInputType = {
    id_prontuario_sinal?: true
    id_prontuario?: true
    id_sinal?: true
  }

  export type Prontuarios_sinaisSumAggregateInputType = {
    id_prontuario_sinal?: true
    id_prontuario?: true
    id_sinal?: true
  }

  export type Prontuarios_sinaisMinAggregateInputType = {
    id_prontuario_sinal?: true
    id_prontuario?: true
    id_sinal?: true
  }

  export type Prontuarios_sinaisMaxAggregateInputType = {
    id_prontuario_sinal?: true
    id_prontuario?: true
    id_sinal?: true
  }

  export type Prontuarios_sinaisCountAggregateInputType = {
    id_prontuario_sinal?: true
    id_prontuario?: true
    id_sinal?: true
    _all?: true
  }

  export type Prontuarios_sinaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_sinais to aggregate.
     */
    where?: prontuarios_sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_sinais to fetch.
     */
    orderBy?: prontuarios_sinaisOrderByWithRelationInput | prontuarios_sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prontuarios_sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_sinais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prontuarios_sinais
    **/
    _count?: true | Prontuarios_sinaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prontuarios_sinaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prontuarios_sinaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prontuarios_sinaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prontuarios_sinaisMaxAggregateInputType
  }

  export type GetProntuarios_sinaisAggregateType<T extends Prontuarios_sinaisAggregateArgs> = {
        [P in keyof T & keyof AggregateProntuarios_sinais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProntuarios_sinais[P]>
      : GetScalarType<T[P], AggregateProntuarios_sinais[P]>
  }




  export type prontuarios_sinaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prontuarios_sinaisWhereInput
    orderBy?: prontuarios_sinaisOrderByWithAggregationInput | prontuarios_sinaisOrderByWithAggregationInput[]
    by: Prontuarios_sinaisScalarFieldEnum[] | Prontuarios_sinaisScalarFieldEnum
    having?: prontuarios_sinaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prontuarios_sinaisCountAggregateInputType | true
    _avg?: Prontuarios_sinaisAvgAggregateInputType
    _sum?: Prontuarios_sinaisSumAggregateInputType
    _min?: Prontuarios_sinaisMinAggregateInputType
    _max?: Prontuarios_sinaisMaxAggregateInputType
  }

  export type Prontuarios_sinaisGroupByOutputType = {
    id_prontuario_sinal: number
    id_prontuario: number
    id_sinal: number
    _count: Prontuarios_sinaisCountAggregateOutputType | null
    _avg: Prontuarios_sinaisAvgAggregateOutputType | null
    _sum: Prontuarios_sinaisSumAggregateOutputType | null
    _min: Prontuarios_sinaisMinAggregateOutputType | null
    _max: Prontuarios_sinaisMaxAggregateOutputType | null
  }

  type GetProntuarios_sinaisGroupByPayload<T extends prontuarios_sinaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prontuarios_sinaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prontuarios_sinaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prontuarios_sinaisGroupByOutputType[P]>
            : GetScalarType<T[P], Prontuarios_sinaisGroupByOutputType[P]>
        }
      >
    >


  export type prontuarios_sinaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_sinal?: boolean
    id_prontuario?: boolean
    id_sinal?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    sinais?: boolean | sinaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_sinais"]>

  export type prontuarios_sinaisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_sinal?: boolean
    id_prontuario?: boolean
    id_sinal?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    sinais?: boolean | sinaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_sinais"]>

  export type prontuarios_sinaisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prontuario_sinal?: boolean
    id_prontuario?: boolean
    id_sinal?: boolean
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    sinais?: boolean | sinaisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuarios_sinais"]>

  export type prontuarios_sinaisSelectScalar = {
    id_prontuario_sinal?: boolean
    id_prontuario?: boolean
    id_sinal?: boolean
  }

  export type prontuarios_sinaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prontuario_sinal" | "id_prontuario" | "id_sinal", ExtArgs["result"]["prontuarios_sinais"]>
  export type prontuarios_sinaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    sinais?: boolean | sinaisDefaultArgs<ExtArgs>
  }
  export type prontuarios_sinaisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    sinais?: boolean | sinaisDefaultArgs<ExtArgs>
  }
  export type prontuarios_sinaisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios?: boolean | prontuariosDefaultArgs<ExtArgs>
    sinais?: boolean | sinaisDefaultArgs<ExtArgs>
  }

  export type $prontuarios_sinaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prontuarios_sinais"
    objects: {
      prontuarios: Prisma.$prontuariosPayload<ExtArgs>
      sinais: Prisma.$sinaisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prontuario_sinal: number
      id_prontuario: number
      id_sinal: number
    }, ExtArgs["result"]["prontuarios_sinais"]>
    composites: {}
  }

  type prontuarios_sinaisGetPayload<S extends boolean | null | undefined | prontuarios_sinaisDefaultArgs> = $Result.GetResult<Prisma.$prontuarios_sinaisPayload, S>

  type prontuarios_sinaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prontuarios_sinaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prontuarios_sinaisCountAggregateInputType | true
    }

  export interface prontuarios_sinaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prontuarios_sinais'], meta: { name: 'prontuarios_sinais' } }
    /**
     * Find zero or one Prontuarios_sinais that matches the filter.
     * @param {prontuarios_sinaisFindUniqueArgs} args - Arguments to find a Prontuarios_sinais
     * @example
     * // Get one Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prontuarios_sinaisFindUniqueArgs>(args: SelectSubset<T, prontuarios_sinaisFindUniqueArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prontuarios_sinais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prontuarios_sinaisFindUniqueOrThrowArgs} args - Arguments to find a Prontuarios_sinais
     * @example
     * // Get one Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prontuarios_sinaisFindUniqueOrThrowArgs>(args: SelectSubset<T, prontuarios_sinaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_sinais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_sinaisFindFirstArgs} args - Arguments to find a Prontuarios_sinais
     * @example
     * // Get one Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prontuarios_sinaisFindFirstArgs>(args?: SelectSubset<T, prontuarios_sinaisFindFirstArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuarios_sinais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_sinaisFindFirstOrThrowArgs} args - Arguments to find a Prontuarios_sinais
     * @example
     * // Get one Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prontuarios_sinaisFindFirstOrThrowArgs>(args?: SelectSubset<T, prontuarios_sinaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prontuarios_sinais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_sinaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.findMany()
     * 
     * // Get first 10 Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.findMany({ take: 10 })
     * 
     * // Only select the `id_prontuario_sinal`
     * const prontuarios_sinaisWithId_prontuario_sinalOnly = await prisma.prontuarios_sinais.findMany({ select: { id_prontuario_sinal: true } })
     * 
     */
    findMany<T extends prontuarios_sinaisFindManyArgs>(args?: SelectSubset<T, prontuarios_sinaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prontuarios_sinais.
     * @param {prontuarios_sinaisCreateArgs} args - Arguments to create a Prontuarios_sinais.
     * @example
     * // Create one Prontuarios_sinais
     * const Prontuarios_sinais = await prisma.prontuarios_sinais.create({
     *   data: {
     *     // ... data to create a Prontuarios_sinais
     *   }
     * })
     * 
     */
    create<T extends prontuarios_sinaisCreateArgs>(args: SelectSubset<T, prontuarios_sinaisCreateArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prontuarios_sinais.
     * @param {prontuarios_sinaisCreateManyArgs} args - Arguments to create many Prontuarios_sinais.
     * @example
     * // Create many Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prontuarios_sinaisCreateManyArgs>(args?: SelectSubset<T, prontuarios_sinaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prontuarios_sinais and returns the data saved in the database.
     * @param {prontuarios_sinaisCreateManyAndReturnArgs} args - Arguments to create many Prontuarios_sinais.
     * @example
     * // Create many Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prontuarios_sinais and only return the `id_prontuario_sinal`
     * const prontuarios_sinaisWithId_prontuario_sinalOnly = await prisma.prontuarios_sinais.createManyAndReturn({
     *   select: { id_prontuario_sinal: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prontuarios_sinaisCreateManyAndReturnArgs>(args?: SelectSubset<T, prontuarios_sinaisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prontuarios_sinais.
     * @param {prontuarios_sinaisDeleteArgs} args - Arguments to delete one Prontuarios_sinais.
     * @example
     * // Delete one Prontuarios_sinais
     * const Prontuarios_sinais = await prisma.prontuarios_sinais.delete({
     *   where: {
     *     // ... filter to delete one Prontuarios_sinais
     *   }
     * })
     * 
     */
    delete<T extends prontuarios_sinaisDeleteArgs>(args: SelectSubset<T, prontuarios_sinaisDeleteArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prontuarios_sinais.
     * @param {prontuarios_sinaisUpdateArgs} args - Arguments to update one Prontuarios_sinais.
     * @example
     * // Update one Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prontuarios_sinaisUpdateArgs>(args: SelectSubset<T, prontuarios_sinaisUpdateArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prontuarios_sinais.
     * @param {prontuarios_sinaisDeleteManyArgs} args - Arguments to filter Prontuarios_sinais to delete.
     * @example
     * // Delete a few Prontuarios_sinais
     * const { count } = await prisma.prontuarios_sinais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prontuarios_sinaisDeleteManyArgs>(args?: SelectSubset<T, prontuarios_sinaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_sinaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prontuarios_sinaisUpdateManyArgs>(args: SelectSubset<T, prontuarios_sinaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios_sinais and returns the data updated in the database.
     * @param {prontuarios_sinaisUpdateManyAndReturnArgs} args - Arguments to update many Prontuarios_sinais.
     * @example
     * // Update many Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prontuarios_sinais and only return the `id_prontuario_sinal`
     * const prontuarios_sinaisWithId_prontuario_sinalOnly = await prisma.prontuarios_sinais.updateManyAndReturn({
     *   select: { id_prontuario_sinal: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prontuarios_sinaisUpdateManyAndReturnArgs>(args: SelectSubset<T, prontuarios_sinaisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prontuarios_sinais.
     * @param {prontuarios_sinaisUpsertArgs} args - Arguments to update or create a Prontuarios_sinais.
     * @example
     * // Update or create a Prontuarios_sinais
     * const prontuarios_sinais = await prisma.prontuarios_sinais.upsert({
     *   create: {
     *     // ... data to create a Prontuarios_sinais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prontuarios_sinais we want to update
     *   }
     * })
     */
    upsert<T extends prontuarios_sinaisUpsertArgs>(args: SelectSubset<T, prontuarios_sinaisUpsertArgs<ExtArgs>>): Prisma__prontuarios_sinaisClient<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prontuarios_sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_sinaisCountArgs} args - Arguments to filter Prontuarios_sinais to count.
     * @example
     * // Count the number of Prontuarios_sinais
     * const count = await prisma.prontuarios_sinais.count({
     *   where: {
     *     // ... the filter for the Prontuarios_sinais we want to count
     *   }
     * })
    **/
    count<T extends prontuarios_sinaisCountArgs>(
      args?: Subset<T, prontuarios_sinaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prontuarios_sinaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prontuarios_sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prontuarios_sinaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prontuarios_sinaisAggregateArgs>(args: Subset<T, Prontuarios_sinaisAggregateArgs>): Prisma.PrismaPromise<GetProntuarios_sinaisAggregateType<T>>

    /**
     * Group by Prontuarios_sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prontuarios_sinaisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prontuarios_sinaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prontuarios_sinaisGroupByArgs['orderBy'] }
        : { orderBy?: prontuarios_sinaisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prontuarios_sinaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProntuarios_sinaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prontuarios_sinais model
   */
  readonly fields: prontuarios_sinaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prontuarios_sinais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prontuarios_sinaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prontuarios<T extends prontuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prontuariosDefaultArgs<ExtArgs>>): Prisma__prontuariosClient<$Result.GetResult<Prisma.$prontuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sinais<T extends sinaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sinaisDefaultArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prontuarios_sinais model
   */
  interface prontuarios_sinaisFieldRefs {
    readonly id_prontuario_sinal: FieldRef<"prontuarios_sinais", 'Int'>
    readonly id_prontuario: FieldRef<"prontuarios_sinais", 'Int'>
    readonly id_sinal: FieldRef<"prontuarios_sinais", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * prontuarios_sinais findUnique
   */
  export type prontuarios_sinaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_sinais to fetch.
     */
    where: prontuarios_sinaisWhereUniqueInput
  }

  /**
   * prontuarios_sinais findUniqueOrThrow
   */
  export type prontuarios_sinaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_sinais to fetch.
     */
    where: prontuarios_sinaisWhereUniqueInput
  }

  /**
   * prontuarios_sinais findFirst
   */
  export type prontuarios_sinaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_sinais to fetch.
     */
    where?: prontuarios_sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_sinais to fetch.
     */
    orderBy?: prontuarios_sinaisOrderByWithRelationInput | prontuarios_sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_sinais.
     */
    cursor?: prontuarios_sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_sinais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_sinais.
     */
    distinct?: Prontuarios_sinaisScalarFieldEnum | Prontuarios_sinaisScalarFieldEnum[]
  }

  /**
   * prontuarios_sinais findFirstOrThrow
   */
  export type prontuarios_sinaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_sinais to fetch.
     */
    where?: prontuarios_sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_sinais to fetch.
     */
    orderBy?: prontuarios_sinaisOrderByWithRelationInput | prontuarios_sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prontuarios_sinais.
     */
    cursor?: prontuarios_sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_sinais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prontuarios_sinais.
     */
    distinct?: Prontuarios_sinaisScalarFieldEnum | Prontuarios_sinaisScalarFieldEnum[]
  }

  /**
   * prontuarios_sinais findMany
   */
  export type prontuarios_sinaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * Filter, which prontuarios_sinais to fetch.
     */
    where?: prontuarios_sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prontuarios_sinais to fetch.
     */
    orderBy?: prontuarios_sinaisOrderByWithRelationInput | prontuarios_sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prontuarios_sinais.
     */
    cursor?: prontuarios_sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prontuarios_sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prontuarios_sinais.
     */
    skip?: number
    distinct?: Prontuarios_sinaisScalarFieldEnum | Prontuarios_sinaisScalarFieldEnum[]
  }

  /**
   * prontuarios_sinais create
   */
  export type prontuarios_sinaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * The data needed to create a prontuarios_sinais.
     */
    data: XOR<prontuarios_sinaisCreateInput, prontuarios_sinaisUncheckedCreateInput>
  }

  /**
   * prontuarios_sinais createMany
   */
  export type prontuarios_sinaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prontuarios_sinais.
     */
    data: prontuarios_sinaisCreateManyInput | prontuarios_sinaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prontuarios_sinais createManyAndReturn
   */
  export type prontuarios_sinaisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * The data used to create many prontuarios_sinais.
     */
    data: prontuarios_sinaisCreateManyInput | prontuarios_sinaisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_sinais update
   */
  export type prontuarios_sinaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * The data needed to update a prontuarios_sinais.
     */
    data: XOR<prontuarios_sinaisUpdateInput, prontuarios_sinaisUncheckedUpdateInput>
    /**
     * Choose, which prontuarios_sinais to update.
     */
    where: prontuarios_sinaisWhereUniqueInput
  }

  /**
   * prontuarios_sinais updateMany
   */
  export type prontuarios_sinaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prontuarios_sinais.
     */
    data: XOR<prontuarios_sinaisUpdateManyMutationInput, prontuarios_sinaisUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_sinais to update
     */
    where?: prontuarios_sinaisWhereInput
    /**
     * Limit how many prontuarios_sinais to update.
     */
    limit?: number
  }

  /**
   * prontuarios_sinais updateManyAndReturn
   */
  export type prontuarios_sinaisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * The data used to update prontuarios_sinais.
     */
    data: XOR<prontuarios_sinaisUpdateManyMutationInput, prontuarios_sinaisUncheckedUpdateManyInput>
    /**
     * Filter which prontuarios_sinais to update
     */
    where?: prontuarios_sinaisWhereInput
    /**
     * Limit how many prontuarios_sinais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prontuarios_sinais upsert
   */
  export type prontuarios_sinaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * The filter to search for the prontuarios_sinais to update in case it exists.
     */
    where: prontuarios_sinaisWhereUniqueInput
    /**
     * In case the prontuarios_sinais found by the `where` argument doesn't exist, create a new prontuarios_sinais with this data.
     */
    create: XOR<prontuarios_sinaisCreateInput, prontuarios_sinaisUncheckedCreateInput>
    /**
     * In case the prontuarios_sinais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prontuarios_sinaisUpdateInput, prontuarios_sinaisUncheckedUpdateInput>
  }

  /**
   * prontuarios_sinais delete
   */
  export type prontuarios_sinaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    /**
     * Filter which prontuarios_sinais to delete.
     */
    where: prontuarios_sinaisWhereUniqueInput
  }

  /**
   * prontuarios_sinais deleteMany
   */
  export type prontuarios_sinaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prontuarios_sinais to delete
     */
    where?: prontuarios_sinaisWhereInput
    /**
     * Limit how many prontuarios_sinais to delete.
     */
    limit?: number
  }

  /**
   * prontuarios_sinais without action
   */
  export type prontuarios_sinaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
  }


  /**
   * Model queixas
   */

  export type AggregateQueixas = {
    _count: QueixasCountAggregateOutputType | null
    _avg: QueixasAvgAggregateOutputType | null
    _sum: QueixasSumAggregateOutputType | null
    _min: QueixasMinAggregateOutputType | null
    _max: QueixasMaxAggregateOutputType | null
  }

  export type QueixasAvgAggregateOutputType = {
    id_queixa: number | null
  }

  export type QueixasSumAggregateOutputType = {
    id_queixa: number | null
  }

  export type QueixasMinAggregateOutputType = {
    id_queixa: number | null
    queixa: string | null
    data_queixa: Date | null
  }

  export type QueixasMaxAggregateOutputType = {
    id_queixa: number | null
    queixa: string | null
    data_queixa: Date | null
  }

  export type QueixasCountAggregateOutputType = {
    id_queixa: number
    queixa: number
    data_queixa: number
    _all: number
  }


  export type QueixasAvgAggregateInputType = {
    id_queixa?: true
  }

  export type QueixasSumAggregateInputType = {
    id_queixa?: true
  }

  export type QueixasMinAggregateInputType = {
    id_queixa?: true
    queixa?: true
    data_queixa?: true
  }

  export type QueixasMaxAggregateInputType = {
    id_queixa?: true
    queixa?: true
    data_queixa?: true
  }

  export type QueixasCountAggregateInputType = {
    id_queixa?: true
    queixa?: true
    data_queixa?: true
    _all?: true
  }

  export type QueixasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which queixas to aggregate.
     */
    where?: queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queixas to fetch.
     */
    orderBy?: queixasOrderByWithRelationInput | queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned queixas
    **/
    _count?: true | QueixasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueixasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueixasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueixasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueixasMaxAggregateInputType
  }

  export type GetQueixasAggregateType<T extends QueixasAggregateArgs> = {
        [P in keyof T & keyof AggregateQueixas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueixas[P]>
      : GetScalarType<T[P], AggregateQueixas[P]>
  }




  export type queixasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: queixasWhereInput
    orderBy?: queixasOrderByWithAggregationInput | queixasOrderByWithAggregationInput[]
    by: QueixasScalarFieldEnum[] | QueixasScalarFieldEnum
    having?: queixasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueixasCountAggregateInputType | true
    _avg?: QueixasAvgAggregateInputType
    _sum?: QueixasSumAggregateInputType
    _min?: QueixasMinAggregateInputType
    _max?: QueixasMaxAggregateInputType
  }

  export type QueixasGroupByOutputType = {
    id_queixa: number
    queixa: string
    data_queixa: Date
    _count: QueixasCountAggregateOutputType | null
    _avg: QueixasAvgAggregateOutputType | null
    _sum: QueixasSumAggregateOutputType | null
    _min: QueixasMinAggregateOutputType | null
    _max: QueixasMaxAggregateOutputType | null
  }

  type GetQueixasGroupByPayload<T extends queixasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueixasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueixasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueixasGroupByOutputType[P]>
            : GetScalarType<T[P], QueixasGroupByOutputType[P]>
        }
      >
    >


  export type queixasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_queixa?: boolean
    queixa?: boolean
    data_queixa?: boolean
    prontuarios_queixas?: boolean | queixas$prontuarios_queixasArgs<ExtArgs>
    _count?: boolean | QueixasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queixas"]>

  export type queixasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_queixa?: boolean
    queixa?: boolean
    data_queixa?: boolean
  }, ExtArgs["result"]["queixas"]>

  export type queixasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_queixa?: boolean
    queixa?: boolean
    data_queixa?: boolean
  }, ExtArgs["result"]["queixas"]>

  export type queixasSelectScalar = {
    id_queixa?: boolean
    queixa?: boolean
    data_queixa?: boolean
  }

  export type queixasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_queixa" | "queixa" | "data_queixa", ExtArgs["result"]["queixas"]>
  export type queixasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios_queixas?: boolean | queixas$prontuarios_queixasArgs<ExtArgs>
    _count?: boolean | QueixasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type queixasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type queixasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $queixasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "queixas"
    objects: {
      prontuarios_queixas: Prisma.$prontuarios_queixasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_queixa: number
      queixa: string
      data_queixa: Date
    }, ExtArgs["result"]["queixas"]>
    composites: {}
  }

  type queixasGetPayload<S extends boolean | null | undefined | queixasDefaultArgs> = $Result.GetResult<Prisma.$queixasPayload, S>

  type queixasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<queixasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueixasCountAggregateInputType | true
    }

  export interface queixasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['queixas'], meta: { name: 'queixas' } }
    /**
     * Find zero or one Queixas that matches the filter.
     * @param {queixasFindUniqueArgs} args - Arguments to find a Queixas
     * @example
     * // Get one Queixas
     * const queixas = await prisma.queixas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends queixasFindUniqueArgs>(args: SelectSubset<T, queixasFindUniqueArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Queixas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {queixasFindUniqueOrThrowArgs} args - Arguments to find a Queixas
     * @example
     * // Get one Queixas
     * const queixas = await prisma.queixas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends queixasFindUniqueOrThrowArgs>(args: SelectSubset<T, queixasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queixasFindFirstArgs} args - Arguments to find a Queixas
     * @example
     * // Get one Queixas
     * const queixas = await prisma.queixas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends queixasFindFirstArgs>(args?: SelectSubset<T, queixasFindFirstArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queixas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queixasFindFirstOrThrowArgs} args - Arguments to find a Queixas
     * @example
     * // Get one Queixas
     * const queixas = await prisma.queixas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends queixasFindFirstOrThrowArgs>(args?: SelectSubset<T, queixasFindFirstOrThrowArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queixasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queixas
     * const queixas = await prisma.queixas.findMany()
     * 
     * // Get first 10 Queixas
     * const queixas = await prisma.queixas.findMany({ take: 10 })
     * 
     * // Only select the `id_queixa`
     * const queixasWithId_queixaOnly = await prisma.queixas.findMany({ select: { id_queixa: true } })
     * 
     */
    findMany<T extends queixasFindManyArgs>(args?: SelectSubset<T, queixasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Queixas.
     * @param {queixasCreateArgs} args - Arguments to create a Queixas.
     * @example
     * // Create one Queixas
     * const Queixas = await prisma.queixas.create({
     *   data: {
     *     // ... data to create a Queixas
     *   }
     * })
     * 
     */
    create<T extends queixasCreateArgs>(args: SelectSubset<T, queixasCreateArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queixas.
     * @param {queixasCreateManyArgs} args - Arguments to create many Queixas.
     * @example
     * // Create many Queixas
     * const queixas = await prisma.queixas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends queixasCreateManyArgs>(args?: SelectSubset<T, queixasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queixas and returns the data saved in the database.
     * @param {queixasCreateManyAndReturnArgs} args - Arguments to create many Queixas.
     * @example
     * // Create many Queixas
     * const queixas = await prisma.queixas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queixas and only return the `id_queixa`
     * const queixasWithId_queixaOnly = await prisma.queixas.createManyAndReturn({
     *   select: { id_queixa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends queixasCreateManyAndReturnArgs>(args?: SelectSubset<T, queixasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Queixas.
     * @param {queixasDeleteArgs} args - Arguments to delete one Queixas.
     * @example
     * // Delete one Queixas
     * const Queixas = await prisma.queixas.delete({
     *   where: {
     *     // ... filter to delete one Queixas
     *   }
     * })
     * 
     */
    delete<T extends queixasDeleteArgs>(args: SelectSubset<T, queixasDeleteArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Queixas.
     * @param {queixasUpdateArgs} args - Arguments to update one Queixas.
     * @example
     * // Update one Queixas
     * const queixas = await prisma.queixas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends queixasUpdateArgs>(args: SelectSubset<T, queixasUpdateArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queixas.
     * @param {queixasDeleteManyArgs} args - Arguments to filter Queixas to delete.
     * @example
     * // Delete a few Queixas
     * const { count } = await prisma.queixas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends queixasDeleteManyArgs>(args?: SelectSubset<T, queixasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queixasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queixas
     * const queixas = await prisma.queixas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends queixasUpdateManyArgs>(args: SelectSubset<T, queixasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queixas and returns the data updated in the database.
     * @param {queixasUpdateManyAndReturnArgs} args - Arguments to update many Queixas.
     * @example
     * // Update many Queixas
     * const queixas = await prisma.queixas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queixas and only return the `id_queixa`
     * const queixasWithId_queixaOnly = await prisma.queixas.updateManyAndReturn({
     *   select: { id_queixa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends queixasUpdateManyAndReturnArgs>(args: SelectSubset<T, queixasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Queixas.
     * @param {queixasUpsertArgs} args - Arguments to update or create a Queixas.
     * @example
     * // Update or create a Queixas
     * const queixas = await prisma.queixas.upsert({
     *   create: {
     *     // ... data to create a Queixas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Queixas we want to update
     *   }
     * })
     */
    upsert<T extends queixasUpsertArgs>(args: SelectSubset<T, queixasUpsertArgs<ExtArgs>>): Prisma__queixasClient<$Result.GetResult<Prisma.$queixasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queixasCountArgs} args - Arguments to filter Queixas to count.
     * @example
     * // Count the number of Queixas
     * const count = await prisma.queixas.count({
     *   where: {
     *     // ... the filter for the Queixas we want to count
     *   }
     * })
    **/
    count<T extends queixasCountArgs>(
      args?: Subset<T, queixasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueixasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueixasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QueixasAggregateArgs>(args: Subset<T, QueixasAggregateArgs>): Prisma.PrismaPromise<GetQueixasAggregateType<T>>

    /**
     * Group by Queixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {queixasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends queixasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: queixasGroupByArgs['orderBy'] }
        : { orderBy?: queixasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, queixasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueixasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the queixas model
   */
  readonly fields: queixasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for queixas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__queixasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prontuarios_queixas<T extends queixas$prontuarios_queixasArgs<ExtArgs> = {}>(args?: Subset<T, queixas$prontuarios_queixasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_queixasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the queixas model
   */
  interface queixasFieldRefs {
    readonly id_queixa: FieldRef<"queixas", 'Int'>
    readonly queixa: FieldRef<"queixas", 'String'>
    readonly data_queixa: FieldRef<"queixas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * queixas findUnique
   */
  export type queixasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * Filter, which queixas to fetch.
     */
    where: queixasWhereUniqueInput
  }

  /**
   * queixas findUniqueOrThrow
   */
  export type queixasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * Filter, which queixas to fetch.
     */
    where: queixasWhereUniqueInput
  }

  /**
   * queixas findFirst
   */
  export type queixasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * Filter, which queixas to fetch.
     */
    where?: queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queixas to fetch.
     */
    orderBy?: queixasOrderByWithRelationInput | queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for queixas.
     */
    cursor?: queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of queixas.
     */
    distinct?: QueixasScalarFieldEnum | QueixasScalarFieldEnum[]
  }

  /**
   * queixas findFirstOrThrow
   */
  export type queixasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * Filter, which queixas to fetch.
     */
    where?: queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queixas to fetch.
     */
    orderBy?: queixasOrderByWithRelationInput | queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for queixas.
     */
    cursor?: queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of queixas.
     */
    distinct?: QueixasScalarFieldEnum | QueixasScalarFieldEnum[]
  }

  /**
   * queixas findMany
   */
  export type queixasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * Filter, which queixas to fetch.
     */
    where?: queixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of queixas to fetch.
     */
    orderBy?: queixasOrderByWithRelationInput | queixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing queixas.
     */
    cursor?: queixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` queixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` queixas.
     */
    skip?: number
    distinct?: QueixasScalarFieldEnum | QueixasScalarFieldEnum[]
  }

  /**
   * queixas create
   */
  export type queixasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * The data needed to create a queixas.
     */
    data: XOR<queixasCreateInput, queixasUncheckedCreateInput>
  }

  /**
   * queixas createMany
   */
  export type queixasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many queixas.
     */
    data: queixasCreateManyInput | queixasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * queixas createManyAndReturn
   */
  export type queixasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * The data used to create many queixas.
     */
    data: queixasCreateManyInput | queixasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * queixas update
   */
  export type queixasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * The data needed to update a queixas.
     */
    data: XOR<queixasUpdateInput, queixasUncheckedUpdateInput>
    /**
     * Choose, which queixas to update.
     */
    where: queixasWhereUniqueInput
  }

  /**
   * queixas updateMany
   */
  export type queixasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update queixas.
     */
    data: XOR<queixasUpdateManyMutationInput, queixasUncheckedUpdateManyInput>
    /**
     * Filter which queixas to update
     */
    where?: queixasWhereInput
    /**
     * Limit how many queixas to update.
     */
    limit?: number
  }

  /**
   * queixas updateManyAndReturn
   */
  export type queixasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * The data used to update queixas.
     */
    data: XOR<queixasUpdateManyMutationInput, queixasUncheckedUpdateManyInput>
    /**
     * Filter which queixas to update
     */
    where?: queixasWhereInput
    /**
     * Limit how many queixas to update.
     */
    limit?: number
  }

  /**
   * queixas upsert
   */
  export type queixasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * The filter to search for the queixas to update in case it exists.
     */
    where: queixasWhereUniqueInput
    /**
     * In case the queixas found by the `where` argument doesn't exist, create a new queixas with this data.
     */
    create: XOR<queixasCreateInput, queixasUncheckedCreateInput>
    /**
     * In case the queixas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<queixasUpdateInput, queixasUncheckedUpdateInput>
  }

  /**
   * queixas delete
   */
  export type queixasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
    /**
     * Filter which queixas to delete.
     */
    where: queixasWhereUniqueInput
  }

  /**
   * queixas deleteMany
   */
  export type queixasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which queixas to delete
     */
    where?: queixasWhereInput
    /**
     * Limit how many queixas to delete.
     */
    limit?: number
  }

  /**
   * queixas.prontuarios_queixas
   */
  export type queixas$prontuarios_queixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_queixas
     */
    select?: prontuarios_queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_queixas
     */
    omit?: prontuarios_queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_queixasInclude<ExtArgs> | null
    where?: prontuarios_queixasWhereInput
    orderBy?: prontuarios_queixasOrderByWithRelationInput | prontuarios_queixasOrderByWithRelationInput[]
    cursor?: prontuarios_queixasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_queixasScalarFieldEnum | Prontuarios_queixasScalarFieldEnum[]
  }

  /**
   * queixas without action
   */
  export type queixasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the queixas
     */
    select?: queixasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the queixas
     */
    omit?: queixasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: queixasInclude<ExtArgs> | null
  }


  /**
   * Model sinais
   */

  export type AggregateSinais = {
    _count: SinaisCountAggregateOutputType | null
    _avg: SinaisAvgAggregateOutputType | null
    _sum: SinaisSumAggregateOutputType | null
    _min: SinaisMinAggregateOutputType | null
    _max: SinaisMaxAggregateOutputType | null
  }

  export type SinaisAvgAggregateOutputType = {
    id_sinal: number | null
    escala: number | null
  }

  export type SinaisSumAggregateOutputType = {
    id_sinal: number | null
    escala: number | null
  }

  export type SinaisMinAggregateOutputType = {
    id_sinal: number | null
    sinal: string | null
    escala: number | null
  }

  export type SinaisMaxAggregateOutputType = {
    id_sinal: number | null
    sinal: string | null
    escala: number | null
  }

  export type SinaisCountAggregateOutputType = {
    id_sinal: number
    sinal: number
    escala: number
    _all: number
  }


  export type SinaisAvgAggregateInputType = {
    id_sinal?: true
    escala?: true
  }

  export type SinaisSumAggregateInputType = {
    id_sinal?: true
    escala?: true
  }

  export type SinaisMinAggregateInputType = {
    id_sinal?: true
    sinal?: true
    escala?: true
  }

  export type SinaisMaxAggregateInputType = {
    id_sinal?: true
    sinal?: true
    escala?: true
  }

  export type SinaisCountAggregateInputType = {
    id_sinal?: true
    sinal?: true
    escala?: true
    _all?: true
  }

  export type SinaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sinais to aggregate.
     */
    where?: sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sinais to fetch.
     */
    orderBy?: sinaisOrderByWithRelationInput | sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sinais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sinais
    **/
    _count?: true | SinaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SinaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SinaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SinaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SinaisMaxAggregateInputType
  }

  export type GetSinaisAggregateType<T extends SinaisAggregateArgs> = {
        [P in keyof T & keyof AggregateSinais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSinais[P]>
      : GetScalarType<T[P], AggregateSinais[P]>
  }




  export type sinaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sinaisWhereInput
    orderBy?: sinaisOrderByWithAggregationInput | sinaisOrderByWithAggregationInput[]
    by: SinaisScalarFieldEnum[] | SinaisScalarFieldEnum
    having?: sinaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SinaisCountAggregateInputType | true
    _avg?: SinaisAvgAggregateInputType
    _sum?: SinaisSumAggregateInputType
    _min?: SinaisMinAggregateInputType
    _max?: SinaisMaxAggregateInputType
  }

  export type SinaisGroupByOutputType = {
    id_sinal: number
    sinal: string
    escala: number
    _count: SinaisCountAggregateOutputType | null
    _avg: SinaisAvgAggregateOutputType | null
    _sum: SinaisSumAggregateOutputType | null
    _min: SinaisMinAggregateOutputType | null
    _max: SinaisMaxAggregateOutputType | null
  }

  type GetSinaisGroupByPayload<T extends sinaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SinaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SinaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SinaisGroupByOutputType[P]>
            : GetScalarType<T[P], SinaisGroupByOutputType[P]>
        }
      >
    >


  export type sinaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sinal?: boolean
    sinal?: boolean
    escala?: boolean
    prontuarios_sinais?: boolean | sinais$prontuarios_sinaisArgs<ExtArgs>
    _count?: boolean | SinaisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sinais"]>

  export type sinaisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sinal?: boolean
    sinal?: boolean
    escala?: boolean
  }, ExtArgs["result"]["sinais"]>

  export type sinaisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sinal?: boolean
    sinal?: boolean
    escala?: boolean
  }, ExtArgs["result"]["sinais"]>

  export type sinaisSelectScalar = {
    id_sinal?: boolean
    sinal?: boolean
    escala?: boolean
  }

  export type sinaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_sinal" | "sinal" | "escala", ExtArgs["result"]["sinais"]>
  export type sinaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prontuarios_sinais?: boolean | sinais$prontuarios_sinaisArgs<ExtArgs>
    _count?: boolean | SinaisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sinaisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type sinaisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $sinaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sinais"
    objects: {
      prontuarios_sinais: Prisma.$prontuarios_sinaisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sinal: number
      sinal: string
      escala: number
    }, ExtArgs["result"]["sinais"]>
    composites: {}
  }

  type sinaisGetPayload<S extends boolean | null | undefined | sinaisDefaultArgs> = $Result.GetResult<Prisma.$sinaisPayload, S>

  type sinaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sinaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SinaisCountAggregateInputType | true
    }

  export interface sinaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sinais'], meta: { name: 'sinais' } }
    /**
     * Find zero or one Sinais that matches the filter.
     * @param {sinaisFindUniqueArgs} args - Arguments to find a Sinais
     * @example
     * // Get one Sinais
     * const sinais = await prisma.sinais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sinaisFindUniqueArgs>(args: SelectSubset<T, sinaisFindUniqueArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sinais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sinaisFindUniqueOrThrowArgs} args - Arguments to find a Sinais
     * @example
     * // Get one Sinais
     * const sinais = await prisma.sinais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sinaisFindUniqueOrThrowArgs>(args: SelectSubset<T, sinaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sinais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sinaisFindFirstArgs} args - Arguments to find a Sinais
     * @example
     * // Get one Sinais
     * const sinais = await prisma.sinais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sinaisFindFirstArgs>(args?: SelectSubset<T, sinaisFindFirstArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sinais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sinaisFindFirstOrThrowArgs} args - Arguments to find a Sinais
     * @example
     * // Get one Sinais
     * const sinais = await prisma.sinais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sinaisFindFirstOrThrowArgs>(args?: SelectSubset<T, sinaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sinais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sinaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sinais
     * const sinais = await prisma.sinais.findMany()
     * 
     * // Get first 10 Sinais
     * const sinais = await prisma.sinais.findMany({ take: 10 })
     * 
     * // Only select the `id_sinal`
     * const sinaisWithId_sinalOnly = await prisma.sinais.findMany({ select: { id_sinal: true } })
     * 
     */
    findMany<T extends sinaisFindManyArgs>(args?: SelectSubset<T, sinaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sinais.
     * @param {sinaisCreateArgs} args - Arguments to create a Sinais.
     * @example
     * // Create one Sinais
     * const Sinais = await prisma.sinais.create({
     *   data: {
     *     // ... data to create a Sinais
     *   }
     * })
     * 
     */
    create<T extends sinaisCreateArgs>(args: SelectSubset<T, sinaisCreateArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sinais.
     * @param {sinaisCreateManyArgs} args - Arguments to create many Sinais.
     * @example
     * // Create many Sinais
     * const sinais = await prisma.sinais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sinaisCreateManyArgs>(args?: SelectSubset<T, sinaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sinais and returns the data saved in the database.
     * @param {sinaisCreateManyAndReturnArgs} args - Arguments to create many Sinais.
     * @example
     * // Create many Sinais
     * const sinais = await prisma.sinais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sinais and only return the `id_sinal`
     * const sinaisWithId_sinalOnly = await prisma.sinais.createManyAndReturn({
     *   select: { id_sinal: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sinaisCreateManyAndReturnArgs>(args?: SelectSubset<T, sinaisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sinais.
     * @param {sinaisDeleteArgs} args - Arguments to delete one Sinais.
     * @example
     * // Delete one Sinais
     * const Sinais = await prisma.sinais.delete({
     *   where: {
     *     // ... filter to delete one Sinais
     *   }
     * })
     * 
     */
    delete<T extends sinaisDeleteArgs>(args: SelectSubset<T, sinaisDeleteArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sinais.
     * @param {sinaisUpdateArgs} args - Arguments to update one Sinais.
     * @example
     * // Update one Sinais
     * const sinais = await prisma.sinais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sinaisUpdateArgs>(args: SelectSubset<T, sinaisUpdateArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sinais.
     * @param {sinaisDeleteManyArgs} args - Arguments to filter Sinais to delete.
     * @example
     * // Delete a few Sinais
     * const { count } = await prisma.sinais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sinaisDeleteManyArgs>(args?: SelectSubset<T, sinaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sinaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sinais
     * const sinais = await prisma.sinais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sinaisUpdateManyArgs>(args: SelectSubset<T, sinaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sinais and returns the data updated in the database.
     * @param {sinaisUpdateManyAndReturnArgs} args - Arguments to update many Sinais.
     * @example
     * // Update many Sinais
     * const sinais = await prisma.sinais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sinais and only return the `id_sinal`
     * const sinaisWithId_sinalOnly = await prisma.sinais.updateManyAndReturn({
     *   select: { id_sinal: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sinaisUpdateManyAndReturnArgs>(args: SelectSubset<T, sinaisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sinais.
     * @param {sinaisUpsertArgs} args - Arguments to update or create a Sinais.
     * @example
     * // Update or create a Sinais
     * const sinais = await prisma.sinais.upsert({
     *   create: {
     *     // ... data to create a Sinais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sinais we want to update
     *   }
     * })
     */
    upsert<T extends sinaisUpsertArgs>(args: SelectSubset<T, sinaisUpsertArgs<ExtArgs>>): Prisma__sinaisClient<$Result.GetResult<Prisma.$sinaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sinaisCountArgs} args - Arguments to filter Sinais to count.
     * @example
     * // Count the number of Sinais
     * const count = await prisma.sinais.count({
     *   where: {
     *     // ... the filter for the Sinais we want to count
     *   }
     * })
    **/
    count<T extends sinaisCountArgs>(
      args?: Subset<T, sinaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SinaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SinaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SinaisAggregateArgs>(args: Subset<T, SinaisAggregateArgs>): Prisma.PrismaPromise<GetSinaisAggregateType<T>>

    /**
     * Group by Sinais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sinaisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sinaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sinaisGroupByArgs['orderBy'] }
        : { orderBy?: sinaisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sinaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSinaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sinais model
   */
  readonly fields: sinaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sinais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sinaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prontuarios_sinais<T extends sinais$prontuarios_sinaisArgs<ExtArgs> = {}>(args?: Subset<T, sinais$prontuarios_sinaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prontuarios_sinaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sinais model
   */
  interface sinaisFieldRefs {
    readonly id_sinal: FieldRef<"sinais", 'Int'>
    readonly sinal: FieldRef<"sinais", 'String'>
    readonly escala: FieldRef<"sinais", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sinais findUnique
   */
  export type sinaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * Filter, which sinais to fetch.
     */
    where: sinaisWhereUniqueInput
  }

  /**
   * sinais findUniqueOrThrow
   */
  export type sinaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * Filter, which sinais to fetch.
     */
    where: sinaisWhereUniqueInput
  }

  /**
   * sinais findFirst
   */
  export type sinaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * Filter, which sinais to fetch.
     */
    where?: sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sinais to fetch.
     */
    orderBy?: sinaisOrderByWithRelationInput | sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sinais.
     */
    cursor?: sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sinais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sinais.
     */
    distinct?: SinaisScalarFieldEnum | SinaisScalarFieldEnum[]
  }

  /**
   * sinais findFirstOrThrow
   */
  export type sinaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * Filter, which sinais to fetch.
     */
    where?: sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sinais to fetch.
     */
    orderBy?: sinaisOrderByWithRelationInput | sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sinais.
     */
    cursor?: sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sinais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sinais.
     */
    distinct?: SinaisScalarFieldEnum | SinaisScalarFieldEnum[]
  }

  /**
   * sinais findMany
   */
  export type sinaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * Filter, which sinais to fetch.
     */
    where?: sinaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sinais to fetch.
     */
    orderBy?: sinaisOrderByWithRelationInput | sinaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sinais.
     */
    cursor?: sinaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sinais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sinais.
     */
    skip?: number
    distinct?: SinaisScalarFieldEnum | SinaisScalarFieldEnum[]
  }

  /**
   * sinais create
   */
  export type sinaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * The data needed to create a sinais.
     */
    data: XOR<sinaisCreateInput, sinaisUncheckedCreateInput>
  }

  /**
   * sinais createMany
   */
  export type sinaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sinais.
     */
    data: sinaisCreateManyInput | sinaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sinais createManyAndReturn
   */
  export type sinaisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * The data used to create many sinais.
     */
    data: sinaisCreateManyInput | sinaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sinais update
   */
  export type sinaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * The data needed to update a sinais.
     */
    data: XOR<sinaisUpdateInput, sinaisUncheckedUpdateInput>
    /**
     * Choose, which sinais to update.
     */
    where: sinaisWhereUniqueInput
  }

  /**
   * sinais updateMany
   */
  export type sinaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sinais.
     */
    data: XOR<sinaisUpdateManyMutationInput, sinaisUncheckedUpdateManyInput>
    /**
     * Filter which sinais to update
     */
    where?: sinaisWhereInput
    /**
     * Limit how many sinais to update.
     */
    limit?: number
  }

  /**
   * sinais updateManyAndReturn
   */
  export type sinaisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * The data used to update sinais.
     */
    data: XOR<sinaisUpdateManyMutationInput, sinaisUncheckedUpdateManyInput>
    /**
     * Filter which sinais to update
     */
    where?: sinaisWhereInput
    /**
     * Limit how many sinais to update.
     */
    limit?: number
  }

  /**
   * sinais upsert
   */
  export type sinaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * The filter to search for the sinais to update in case it exists.
     */
    where: sinaisWhereUniqueInput
    /**
     * In case the sinais found by the `where` argument doesn't exist, create a new sinais with this data.
     */
    create: XOR<sinaisCreateInput, sinaisUncheckedCreateInput>
    /**
     * In case the sinais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sinaisUpdateInput, sinaisUncheckedUpdateInput>
  }

  /**
   * sinais delete
   */
  export type sinaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
    /**
     * Filter which sinais to delete.
     */
    where: sinaisWhereUniqueInput
  }

  /**
   * sinais deleteMany
   */
  export type sinaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sinais to delete
     */
    where?: sinaisWhereInput
    /**
     * Limit how many sinais to delete.
     */
    limit?: number
  }

  /**
   * sinais.prontuarios_sinais
   */
  export type sinais$prontuarios_sinaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prontuarios_sinais
     */
    select?: prontuarios_sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prontuarios_sinais
     */
    omit?: prontuarios_sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prontuarios_sinaisInclude<ExtArgs> | null
    where?: prontuarios_sinaisWhereInput
    orderBy?: prontuarios_sinaisOrderByWithRelationInput | prontuarios_sinaisOrderByWithRelationInput[]
    cursor?: prontuarios_sinaisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prontuarios_sinaisScalarFieldEnum | Prontuarios_sinaisScalarFieldEnum[]
  }

  /**
   * sinais without action
   */
  export type sinaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sinais
     */
    select?: sinaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sinais
     */
    omit?: sinaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sinaisInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id_tag: number | null
  }

  export type TagsSumAggregateOutputType = {
    id_tag: number | null
  }

  export type TagsMinAggregateOutputType = {
    id_tag: number | null
    tag: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id_tag: number | null
    tag: string | null
  }

  export type TagsCountAggregateOutputType = {
    id_tag: number
    tag: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id_tag?: true
  }

  export type TagsSumAggregateInputType = {
    id_tag?: true
  }

  export type TagsMinAggregateInputType = {
    id_tag?: true
    tag?: true
  }

  export type TagsMaxAggregateInputType = {
    id_tag?: true
    tag?: true
  }

  export type TagsCountAggregateInputType = {
    id_tag?: true
    tag?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id_tag: number
    tag: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tag?: boolean
    tag?: boolean
    exericios_tags?: boolean | tags$exericios_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tag?: boolean
    tag?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tag?: boolean
    tag?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id_tag?: boolean
    tag?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tag" | "tag", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exericios_tags?: boolean | tags$exericios_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      exericios_tags: Prisma.$exericios_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tag: number
      tag: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id_tag`
     * const tagsWithId_tagOnly = await prisma.tags.findMany({ select: { id_tag: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id_tag`
     * const tagsWithId_tagOnly = await prisma.tags.createManyAndReturn({
     *   select: { id_tag: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id_tag`
     * const tagsWithId_tagOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id_tag: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exericios_tags<T extends tags$exericios_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$exericios_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exericios_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id_tag: FieldRef<"tags", 'Int'>
    readonly tag: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.exericios_tags
   */
  export type tags$exericios_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exericios_tags
     */
    select?: exericios_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exericios_tags
     */
    omit?: exericios_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exericios_tagsInclude<ExtArgs> | null
    where?: exericios_tagsWhereInput
    orderBy?: exericios_tagsOrderByWithRelationInput | exericios_tagsOrderByWithRelationInput[]
    cursor?: exericios_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exericios_tagsScalarFieldEnum | Exericios_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PacientesScalarFieldEnum: {
    id_paciente: 'id_paciente',
    is_ativo: 'is_ativo',
    primeiro_acesso: 'primeiro_acesso'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const ProfissionaisScalarFieldEnum: {
    id_profissional: 'id_profissional',
    crm: 'crm',
    hash_palavra_chave: 'hash_palavra_chave'
  };

  export type ProfissionaisScalarFieldEnum = (typeof ProfissionaisScalarFieldEnum)[keyof typeof ProfissionaisScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome: 'nome',
    email: 'email',
    hash_senha: 'hash_senha',
    data_nascimento: 'data_nascimento',
    telefone: 'telefone'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const AvaliacoesScalarFieldEnum: {
    id_avaliacao: 'id_avaliacao',
    avaliacao: 'avaliacao',
    data_avaliacao: 'data_avaliacao'
  };

  export type AvaliacoesScalarFieldEnum = (typeof AvaliacoesScalarFieldEnum)[keyof typeof AvaliacoesScalarFieldEnum]


  export const ExerciciosScalarFieldEnum: {
    id_exercicio: 'id_exercicio',
    titulo: 'titulo',
    descricao: 'descricao',
    orientacoes: 'orientacoes'
  };

  export type ExerciciosScalarFieldEnum = (typeof ExerciciosScalarFieldEnum)[keyof typeof ExerciciosScalarFieldEnum]


  export const Exericios_tagsScalarFieldEnum: {
    id_exercicio_tag: 'id_exercicio_tag',
    id_tag: 'id_tag',
    id_exercicio: 'id_exercicio'
  };

  export type Exericios_tagsScalarFieldEnum = (typeof Exericios_tagsScalarFieldEnum)[keyof typeof Exericios_tagsScalarFieldEnum]


  export const Imagens_exerciciosScalarFieldEnum: {
    id_imagem: 'id_imagem',
    link_imagem: 'link_imagem',
    id_exercicio: 'id_exercicio'
  };

  export type Imagens_exerciciosScalarFieldEnum = (typeof Imagens_exerciciosScalarFieldEnum)[keyof typeof Imagens_exerciciosScalarFieldEnum]


  export const OrientacoesScalarFieldEnum: {
    id_orientacao: 'id_orientacao',
    orientacao: 'orientacao',
    data_orientacao: 'data_orientacao',
    id_prontuario: 'id_prontuario'
  };

  export type OrientacoesScalarFieldEnum = (typeof OrientacoesScalarFieldEnum)[keyof typeof OrientacoesScalarFieldEnum]


  export const ProntuariosScalarFieldEnum: {
    id_prontuario: 'id_prontuario',
    data_inicio_tratamento: 'data_inicio_tratamento',
    classificacao: 'classificacao',
    id_paciente: 'id_paciente'
  };

  export type ProntuariosScalarFieldEnum = (typeof ProntuariosScalarFieldEnum)[keyof typeof ProntuariosScalarFieldEnum]


  export const Prontuarios_avaliacoesScalarFieldEnum: {
    id_prontuario_avaliacao: 'id_prontuario_avaliacao',
    id_avaliacao: 'id_avaliacao',
    id_prontuario: 'id_prontuario'
  };

  export type Prontuarios_avaliacoesScalarFieldEnum = (typeof Prontuarios_avaliacoesScalarFieldEnum)[keyof typeof Prontuarios_avaliacoesScalarFieldEnum]


  export const Prontuarios_exerciciosScalarFieldEnum: {
    id_prontuario_exercicio: 'id_prontuario_exercicio',
    id_exercicio: 'id_exercicio',
    id_prontuario: 'id_prontuario'
  };

  export type Prontuarios_exerciciosScalarFieldEnum = (typeof Prontuarios_exerciciosScalarFieldEnum)[keyof typeof Prontuarios_exerciciosScalarFieldEnum]


  export const Prontuarios_queixasScalarFieldEnum: {
    id_prontuario_queixa: 'id_prontuario_queixa',
    id_prontuario: 'id_prontuario',
    id_queixa: 'id_queixa'
  };

  export type Prontuarios_queixasScalarFieldEnum = (typeof Prontuarios_queixasScalarFieldEnum)[keyof typeof Prontuarios_queixasScalarFieldEnum]


  export const Prontuarios_sinaisScalarFieldEnum: {
    id_prontuario_sinal: 'id_prontuario_sinal',
    id_prontuario: 'id_prontuario',
    id_sinal: 'id_sinal'
  };

  export type Prontuarios_sinaisScalarFieldEnum = (typeof Prontuarios_sinaisScalarFieldEnum)[keyof typeof Prontuarios_sinaisScalarFieldEnum]


  export const QueixasScalarFieldEnum: {
    id_queixa: 'id_queixa',
    queixa: 'queixa',
    data_queixa: 'data_queixa'
  };

  export type QueixasScalarFieldEnum = (typeof QueixasScalarFieldEnum)[keyof typeof QueixasScalarFieldEnum]


  export const SinaisScalarFieldEnum: {
    id_sinal: 'id_sinal',
    sinal: 'sinal',
    escala: 'escala'
  };

  export type SinaisScalarFieldEnum = (typeof SinaisScalarFieldEnum)[keyof typeof SinaisScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id_tag: 'id_tag',
    tag: 'tag'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'classificacao_usuario'
   */
  export type Enumclassificacao_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'classificacao_usuario'>
    


  /**
   * Reference to a field of type 'classificacao_usuario[]'
   */
  export type ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'classificacao_usuario[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    id_paciente?: IntFilter<"pacientes"> | number
    is_ativo?: BoolFilter<"pacientes"> | boolean
    primeiro_acesso?: BoolFilter<"pacientes"> | boolean
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    prontuarios?: ProntuariosListRelationFilter
  }

  export type pacientesOrderByWithRelationInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    prontuarios?: prontuariosOrderByRelationAggregateInput
  }

  export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    id_paciente?: number
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    is_ativo?: BoolFilter<"pacientes"> | boolean
    primeiro_acesso?: BoolFilter<"pacientes"> | boolean
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    prontuarios?: ProntuariosListRelationFilter
  }, "id_paciente">

  export type pacientesOrderByWithAggregationInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _avg?: pacientesAvgOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
    _sum?: pacientesSumOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    id_paciente?: IntWithAggregatesFilter<"pacientes"> | number
    is_ativo?: BoolWithAggregatesFilter<"pacientes"> | boolean
    primeiro_acesso?: BoolWithAggregatesFilter<"pacientes"> | boolean
  }

  export type profissionaisWhereInput = {
    AND?: profissionaisWhereInput | profissionaisWhereInput[]
    OR?: profissionaisWhereInput[]
    NOT?: profissionaisWhereInput | profissionaisWhereInput[]
    id_profissional?: IntFilter<"profissionais"> | number
    crm?: StringFilter<"profissionais"> | string
    hash_palavra_chave?: StringFilter<"profissionais"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type profissionaisOrderByWithRelationInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
    hash_palavra_chave?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type profissionaisWhereUniqueInput = Prisma.AtLeast<{
    id_profissional?: number
    AND?: profissionaisWhereInput | profissionaisWhereInput[]
    OR?: profissionaisWhereInput[]
    NOT?: profissionaisWhereInput | profissionaisWhereInput[]
    crm?: StringFilter<"profissionais"> | string
    hash_palavra_chave?: StringFilter<"profissionais"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_profissional">

  export type profissionaisOrderByWithAggregationInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
    hash_palavra_chave?: SortOrder
    _count?: profissionaisCountOrderByAggregateInput
    _avg?: profissionaisAvgOrderByAggregateInput
    _max?: profissionaisMaxOrderByAggregateInput
    _min?: profissionaisMinOrderByAggregateInput
    _sum?: profissionaisSumOrderByAggregateInput
  }

  export type profissionaisScalarWhereWithAggregatesInput = {
    AND?: profissionaisScalarWhereWithAggregatesInput | profissionaisScalarWhereWithAggregatesInput[]
    OR?: profissionaisScalarWhereWithAggregatesInput[]
    NOT?: profissionaisScalarWhereWithAggregatesInput | profissionaisScalarWhereWithAggregatesInput[]
    id_profissional?: IntWithAggregatesFilter<"profissionais"> | number
    crm?: StringWithAggregatesFilter<"profissionais"> | string
    hash_palavra_chave?: StringWithAggregatesFilter<"profissionais"> | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    hash_senha?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeFilter<"usuarios"> | Date | string
    telefone?: StringFilter<"usuarios"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    profissionais?: XOR<ProfissionaisNullableScalarRelationFilter, profissionaisWhereInput> | null
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    pacientes?: pacientesOrderByWithRelationInput
    profissionais?: profissionaisOrderByWithRelationInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    hash_senha?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeFilter<"usuarios"> | Date | string
    telefone?: StringFilter<"usuarios"> | string
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    profissionais?: XOR<ProfissionaisNullableScalarRelationFilter, profissionaisWhereInput> | null
  }, "id_usuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    hash_senha?: StringWithAggregatesFilter<"usuarios"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    telefone?: StringWithAggregatesFilter<"usuarios"> | string
  }

  export type avaliacoesWhereInput = {
    AND?: avaliacoesWhereInput | avaliacoesWhereInput[]
    OR?: avaliacoesWhereInput[]
    NOT?: avaliacoesWhereInput | avaliacoesWhereInput[]
    id_avaliacao?: IntFilter<"avaliacoes"> | number
    avaliacao?: StringFilter<"avaliacoes"> | string
    data_avaliacao?: DateTimeFilter<"avaliacoes"> | Date | string
    prontuarios_avaliacoes?: Prontuarios_avaliacoesListRelationFilter
  }

  export type avaliacoesOrderByWithRelationInput = {
    id_avaliacao?: SortOrder
    avaliacao?: SortOrder
    data_avaliacao?: SortOrder
    prontuarios_avaliacoes?: prontuarios_avaliacoesOrderByRelationAggregateInput
  }

  export type avaliacoesWhereUniqueInput = Prisma.AtLeast<{
    id_avaliacao?: number
    AND?: avaliacoesWhereInput | avaliacoesWhereInput[]
    OR?: avaliacoesWhereInput[]
    NOT?: avaliacoesWhereInput | avaliacoesWhereInput[]
    avaliacao?: StringFilter<"avaliacoes"> | string
    data_avaliacao?: DateTimeFilter<"avaliacoes"> | Date | string
    prontuarios_avaliacoes?: Prontuarios_avaliacoesListRelationFilter
  }, "id_avaliacao">

  export type avaliacoesOrderByWithAggregationInput = {
    id_avaliacao?: SortOrder
    avaliacao?: SortOrder
    data_avaliacao?: SortOrder
    _count?: avaliacoesCountOrderByAggregateInput
    _avg?: avaliacoesAvgOrderByAggregateInput
    _max?: avaliacoesMaxOrderByAggregateInput
    _min?: avaliacoesMinOrderByAggregateInput
    _sum?: avaliacoesSumOrderByAggregateInput
  }

  export type avaliacoesScalarWhereWithAggregatesInput = {
    AND?: avaliacoesScalarWhereWithAggregatesInput | avaliacoesScalarWhereWithAggregatesInput[]
    OR?: avaliacoesScalarWhereWithAggregatesInput[]
    NOT?: avaliacoesScalarWhereWithAggregatesInput | avaliacoesScalarWhereWithAggregatesInput[]
    id_avaliacao?: IntWithAggregatesFilter<"avaliacoes"> | number
    avaliacao?: StringWithAggregatesFilter<"avaliacoes"> | string
    data_avaliacao?: DateTimeWithAggregatesFilter<"avaliacoes"> | Date | string
  }

  export type exerciciosWhereInput = {
    AND?: exerciciosWhereInput | exerciciosWhereInput[]
    OR?: exerciciosWhereInput[]
    NOT?: exerciciosWhereInput | exerciciosWhereInput[]
    id_exercicio?: IntFilter<"exercicios"> | number
    titulo?: StringFilter<"exercicios"> | string
    descricao?: StringFilter<"exercicios"> | string
    orientacoes?: StringFilter<"exercicios"> | string
    exericios_tags?: Exericios_tagsListRelationFilter
    imagens_exercicios?: Imagens_exerciciosListRelationFilter
    prontuarios_exercicios?: Prontuarios_exerciciosListRelationFilter
  }

  export type exerciciosOrderByWithRelationInput = {
    id_exercicio?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    orientacoes?: SortOrder
    exericios_tags?: exericios_tagsOrderByRelationAggregateInput
    imagens_exercicios?: imagens_exerciciosOrderByRelationAggregateInput
    prontuarios_exercicios?: prontuarios_exerciciosOrderByRelationAggregateInput
  }

  export type exerciciosWhereUniqueInput = Prisma.AtLeast<{
    id_exercicio?: number
    AND?: exerciciosWhereInput | exerciciosWhereInput[]
    OR?: exerciciosWhereInput[]
    NOT?: exerciciosWhereInput | exerciciosWhereInput[]
    titulo?: StringFilter<"exercicios"> | string
    descricao?: StringFilter<"exercicios"> | string
    orientacoes?: StringFilter<"exercicios"> | string
    exericios_tags?: Exericios_tagsListRelationFilter
    imagens_exercicios?: Imagens_exerciciosListRelationFilter
    prontuarios_exercicios?: Prontuarios_exerciciosListRelationFilter
  }, "id_exercicio">

  export type exerciciosOrderByWithAggregationInput = {
    id_exercicio?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    orientacoes?: SortOrder
    _count?: exerciciosCountOrderByAggregateInput
    _avg?: exerciciosAvgOrderByAggregateInput
    _max?: exerciciosMaxOrderByAggregateInput
    _min?: exerciciosMinOrderByAggregateInput
    _sum?: exerciciosSumOrderByAggregateInput
  }

  export type exerciciosScalarWhereWithAggregatesInput = {
    AND?: exerciciosScalarWhereWithAggregatesInput | exerciciosScalarWhereWithAggregatesInput[]
    OR?: exerciciosScalarWhereWithAggregatesInput[]
    NOT?: exerciciosScalarWhereWithAggregatesInput | exerciciosScalarWhereWithAggregatesInput[]
    id_exercicio?: IntWithAggregatesFilter<"exercicios"> | number
    titulo?: StringWithAggregatesFilter<"exercicios"> | string
    descricao?: StringWithAggregatesFilter<"exercicios"> | string
    orientacoes?: StringWithAggregatesFilter<"exercicios"> | string
  }

  export type exericios_tagsWhereInput = {
    AND?: exericios_tagsWhereInput | exericios_tagsWhereInput[]
    OR?: exericios_tagsWhereInput[]
    NOT?: exericios_tagsWhereInput | exericios_tagsWhereInput[]
    id_exercicio_tag?: IntFilter<"exericios_tags"> | number
    id_tag?: IntFilter<"exericios_tags"> | number
    id_exercicio?: IntFilter<"exericios_tags"> | number
    exercicios?: XOR<ExerciciosScalarRelationFilter, exerciciosWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type exericios_tagsOrderByWithRelationInput = {
    id_exercicio_tag?: SortOrder
    id_tag?: SortOrder
    id_exercicio?: SortOrder
    exercicios?: exerciciosOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type exericios_tagsWhereUniqueInput = Prisma.AtLeast<{
    id_exercicio_tag?: number
    AND?: exericios_tagsWhereInput | exericios_tagsWhereInput[]
    OR?: exericios_tagsWhereInput[]
    NOT?: exericios_tagsWhereInput | exericios_tagsWhereInput[]
    id_tag?: IntFilter<"exericios_tags"> | number
    id_exercicio?: IntFilter<"exericios_tags"> | number
    exercicios?: XOR<ExerciciosScalarRelationFilter, exerciciosWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "id_exercicio_tag">

  export type exericios_tagsOrderByWithAggregationInput = {
    id_exercicio_tag?: SortOrder
    id_tag?: SortOrder
    id_exercicio?: SortOrder
    _count?: exericios_tagsCountOrderByAggregateInput
    _avg?: exericios_tagsAvgOrderByAggregateInput
    _max?: exericios_tagsMaxOrderByAggregateInput
    _min?: exericios_tagsMinOrderByAggregateInput
    _sum?: exericios_tagsSumOrderByAggregateInput
  }

  export type exericios_tagsScalarWhereWithAggregatesInput = {
    AND?: exericios_tagsScalarWhereWithAggregatesInput | exericios_tagsScalarWhereWithAggregatesInput[]
    OR?: exericios_tagsScalarWhereWithAggregatesInput[]
    NOT?: exericios_tagsScalarWhereWithAggregatesInput | exericios_tagsScalarWhereWithAggregatesInput[]
    id_exercicio_tag?: IntWithAggregatesFilter<"exericios_tags"> | number
    id_tag?: IntWithAggregatesFilter<"exericios_tags"> | number
    id_exercicio?: IntWithAggregatesFilter<"exericios_tags"> | number
  }

  export type imagens_exerciciosWhereInput = {
    AND?: imagens_exerciciosWhereInput | imagens_exerciciosWhereInput[]
    OR?: imagens_exerciciosWhereInput[]
    NOT?: imagens_exerciciosWhereInput | imagens_exerciciosWhereInput[]
    id_imagem?: IntFilter<"imagens_exercicios"> | number
    link_imagem?: StringFilter<"imagens_exercicios"> | string
    id_exercicio?: IntFilter<"imagens_exercicios"> | number
    exercicios?: XOR<ExerciciosScalarRelationFilter, exerciciosWhereInput>
  }

  export type imagens_exerciciosOrderByWithRelationInput = {
    id_imagem?: SortOrder
    link_imagem?: SortOrder
    id_exercicio?: SortOrder
    exercicios?: exerciciosOrderByWithRelationInput
  }

  export type imagens_exerciciosWhereUniqueInput = Prisma.AtLeast<{
    id_imagem?: number
    AND?: imagens_exerciciosWhereInput | imagens_exerciciosWhereInput[]
    OR?: imagens_exerciciosWhereInput[]
    NOT?: imagens_exerciciosWhereInput | imagens_exerciciosWhereInput[]
    link_imagem?: StringFilter<"imagens_exercicios"> | string
    id_exercicio?: IntFilter<"imagens_exercicios"> | number
    exercicios?: XOR<ExerciciosScalarRelationFilter, exerciciosWhereInput>
  }, "id_imagem">

  export type imagens_exerciciosOrderByWithAggregationInput = {
    id_imagem?: SortOrder
    link_imagem?: SortOrder
    id_exercicio?: SortOrder
    _count?: imagens_exerciciosCountOrderByAggregateInput
    _avg?: imagens_exerciciosAvgOrderByAggregateInput
    _max?: imagens_exerciciosMaxOrderByAggregateInput
    _min?: imagens_exerciciosMinOrderByAggregateInput
    _sum?: imagens_exerciciosSumOrderByAggregateInput
  }

  export type imagens_exerciciosScalarWhereWithAggregatesInput = {
    AND?: imagens_exerciciosScalarWhereWithAggregatesInput | imagens_exerciciosScalarWhereWithAggregatesInput[]
    OR?: imagens_exerciciosScalarWhereWithAggregatesInput[]
    NOT?: imagens_exerciciosScalarWhereWithAggregatesInput | imagens_exerciciosScalarWhereWithAggregatesInput[]
    id_imagem?: IntWithAggregatesFilter<"imagens_exercicios"> | number
    link_imagem?: StringWithAggregatesFilter<"imagens_exercicios"> | string
    id_exercicio?: IntWithAggregatesFilter<"imagens_exercicios"> | number
  }

  export type orientacoesWhereInput = {
    AND?: orientacoesWhereInput | orientacoesWhereInput[]
    OR?: orientacoesWhereInput[]
    NOT?: orientacoesWhereInput | orientacoesWhereInput[]
    id_orientacao?: IntFilter<"orientacoes"> | number
    orientacao?: StringFilter<"orientacoes"> | string
    data_orientacao?: DateTimeFilter<"orientacoes"> | Date | string
    id_prontuario?: IntFilter<"orientacoes"> | number
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
  }

  export type orientacoesOrderByWithRelationInput = {
    id_orientacao?: SortOrder
    orientacao?: SortOrder
    data_orientacao?: SortOrder
    id_prontuario?: SortOrder
    prontuarios?: prontuariosOrderByWithRelationInput
  }

  export type orientacoesWhereUniqueInput = Prisma.AtLeast<{
    id_orientacao?: number
    AND?: orientacoesWhereInput | orientacoesWhereInput[]
    OR?: orientacoesWhereInput[]
    NOT?: orientacoesWhereInput | orientacoesWhereInput[]
    orientacao?: StringFilter<"orientacoes"> | string
    data_orientacao?: DateTimeFilter<"orientacoes"> | Date | string
    id_prontuario?: IntFilter<"orientacoes"> | number
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
  }, "id_orientacao">

  export type orientacoesOrderByWithAggregationInput = {
    id_orientacao?: SortOrder
    orientacao?: SortOrder
    data_orientacao?: SortOrder
    id_prontuario?: SortOrder
    _count?: orientacoesCountOrderByAggregateInput
    _avg?: orientacoesAvgOrderByAggregateInput
    _max?: orientacoesMaxOrderByAggregateInput
    _min?: orientacoesMinOrderByAggregateInput
    _sum?: orientacoesSumOrderByAggregateInput
  }

  export type orientacoesScalarWhereWithAggregatesInput = {
    AND?: orientacoesScalarWhereWithAggregatesInput | orientacoesScalarWhereWithAggregatesInput[]
    OR?: orientacoesScalarWhereWithAggregatesInput[]
    NOT?: orientacoesScalarWhereWithAggregatesInput | orientacoesScalarWhereWithAggregatesInput[]
    id_orientacao?: IntWithAggregatesFilter<"orientacoes"> | number
    orientacao?: StringWithAggregatesFilter<"orientacoes"> | string
    data_orientacao?: DateTimeWithAggregatesFilter<"orientacoes"> | Date | string
    id_prontuario?: IntWithAggregatesFilter<"orientacoes"> | number
  }

  export type prontuariosWhereInput = {
    AND?: prontuariosWhereInput | prontuariosWhereInput[]
    OR?: prontuariosWhereInput[]
    NOT?: prontuariosWhereInput | prontuariosWhereInput[]
    id_prontuario?: IntFilter<"prontuarios"> | number
    data_inicio_tratamento?: DateTimeFilter<"prontuarios"> | Date | string
    classificacao?: Enumclassificacao_usuarioFilter<"prontuarios"> | $Enums.classificacao_usuario
    id_paciente?: IntFilter<"prontuarios"> | number
    orientacoes?: OrientacoesListRelationFilter
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    prontuarios_avaliacoes?: Prontuarios_avaliacoesListRelationFilter
    prontuarios_exercicios?: Prontuarios_exerciciosListRelationFilter
    prontuarios_queixas?: Prontuarios_queixasListRelationFilter
    prontuarios_sinais?: Prontuarios_sinaisListRelationFilter
  }

  export type prontuariosOrderByWithRelationInput = {
    id_prontuario?: SortOrder
    data_inicio_tratamento?: SortOrder
    classificacao?: SortOrder
    id_paciente?: SortOrder
    orientacoes?: orientacoesOrderByRelationAggregateInput
    pacientes?: pacientesOrderByWithRelationInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesOrderByRelationAggregateInput
    prontuarios_exercicios?: prontuarios_exerciciosOrderByRelationAggregateInput
    prontuarios_queixas?: prontuarios_queixasOrderByRelationAggregateInput
    prontuarios_sinais?: prontuarios_sinaisOrderByRelationAggregateInput
  }

  export type prontuariosWhereUniqueInput = Prisma.AtLeast<{
    id_prontuario?: number
    AND?: prontuariosWhereInput | prontuariosWhereInput[]
    OR?: prontuariosWhereInput[]
    NOT?: prontuariosWhereInput | prontuariosWhereInput[]
    data_inicio_tratamento?: DateTimeFilter<"prontuarios"> | Date | string
    classificacao?: Enumclassificacao_usuarioFilter<"prontuarios"> | $Enums.classificacao_usuario
    id_paciente?: IntFilter<"prontuarios"> | number
    orientacoes?: OrientacoesListRelationFilter
    pacientes?: XOR<PacientesScalarRelationFilter, pacientesWhereInput>
    prontuarios_avaliacoes?: Prontuarios_avaliacoesListRelationFilter
    prontuarios_exercicios?: Prontuarios_exerciciosListRelationFilter
    prontuarios_queixas?: Prontuarios_queixasListRelationFilter
    prontuarios_sinais?: Prontuarios_sinaisListRelationFilter
  }, "id_prontuario">

  export type prontuariosOrderByWithAggregationInput = {
    id_prontuario?: SortOrder
    data_inicio_tratamento?: SortOrder
    classificacao?: SortOrder
    id_paciente?: SortOrder
    _count?: prontuariosCountOrderByAggregateInput
    _avg?: prontuariosAvgOrderByAggregateInput
    _max?: prontuariosMaxOrderByAggregateInput
    _min?: prontuariosMinOrderByAggregateInput
    _sum?: prontuariosSumOrderByAggregateInput
  }

  export type prontuariosScalarWhereWithAggregatesInput = {
    AND?: prontuariosScalarWhereWithAggregatesInput | prontuariosScalarWhereWithAggregatesInput[]
    OR?: prontuariosScalarWhereWithAggregatesInput[]
    NOT?: prontuariosScalarWhereWithAggregatesInput | prontuariosScalarWhereWithAggregatesInput[]
    id_prontuario?: IntWithAggregatesFilter<"prontuarios"> | number
    data_inicio_tratamento?: DateTimeWithAggregatesFilter<"prontuarios"> | Date | string
    classificacao?: Enumclassificacao_usuarioWithAggregatesFilter<"prontuarios"> | $Enums.classificacao_usuario
    id_paciente?: IntWithAggregatesFilter<"prontuarios"> | number
  }

  export type prontuarios_avaliacoesWhereInput = {
    AND?: prontuarios_avaliacoesWhereInput | prontuarios_avaliacoesWhereInput[]
    OR?: prontuarios_avaliacoesWhereInput[]
    NOT?: prontuarios_avaliacoesWhereInput | prontuarios_avaliacoesWhereInput[]
    id_prontuario_avaliacao?: IntFilter<"prontuarios_avaliacoes"> | number
    id_avaliacao?: IntFilter<"prontuarios_avaliacoes"> | number
    id_prontuario?: IntFilter<"prontuarios_avaliacoes"> | number
    avaliacoes?: XOR<AvaliacoesScalarRelationFilter, avaliacoesWhereInput>
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
  }

  export type prontuarios_avaliacoesOrderByWithRelationInput = {
    id_prontuario_avaliacao?: SortOrder
    id_avaliacao?: SortOrder
    id_prontuario?: SortOrder
    avaliacoes?: avaliacoesOrderByWithRelationInput
    prontuarios?: prontuariosOrderByWithRelationInput
  }

  export type prontuarios_avaliacoesWhereUniqueInput = Prisma.AtLeast<{
    id_prontuario_avaliacao?: number
    AND?: prontuarios_avaliacoesWhereInput | prontuarios_avaliacoesWhereInput[]
    OR?: prontuarios_avaliacoesWhereInput[]
    NOT?: prontuarios_avaliacoesWhereInput | prontuarios_avaliacoesWhereInput[]
    id_avaliacao?: IntFilter<"prontuarios_avaliacoes"> | number
    id_prontuario?: IntFilter<"prontuarios_avaliacoes"> | number
    avaliacoes?: XOR<AvaliacoesScalarRelationFilter, avaliacoesWhereInput>
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
  }, "id_prontuario_avaliacao">

  export type prontuarios_avaliacoesOrderByWithAggregationInput = {
    id_prontuario_avaliacao?: SortOrder
    id_avaliacao?: SortOrder
    id_prontuario?: SortOrder
    _count?: prontuarios_avaliacoesCountOrderByAggregateInput
    _avg?: prontuarios_avaliacoesAvgOrderByAggregateInput
    _max?: prontuarios_avaliacoesMaxOrderByAggregateInput
    _min?: prontuarios_avaliacoesMinOrderByAggregateInput
    _sum?: prontuarios_avaliacoesSumOrderByAggregateInput
  }

  export type prontuarios_avaliacoesScalarWhereWithAggregatesInput = {
    AND?: prontuarios_avaliacoesScalarWhereWithAggregatesInput | prontuarios_avaliacoesScalarWhereWithAggregatesInput[]
    OR?: prontuarios_avaliacoesScalarWhereWithAggregatesInput[]
    NOT?: prontuarios_avaliacoesScalarWhereWithAggregatesInput | prontuarios_avaliacoesScalarWhereWithAggregatesInput[]
    id_prontuario_avaliacao?: IntWithAggregatesFilter<"prontuarios_avaliacoes"> | number
    id_avaliacao?: IntWithAggregatesFilter<"prontuarios_avaliacoes"> | number
    id_prontuario?: IntWithAggregatesFilter<"prontuarios_avaliacoes"> | number
  }

  export type prontuarios_exerciciosWhereInput = {
    AND?: prontuarios_exerciciosWhereInput | prontuarios_exerciciosWhereInput[]
    OR?: prontuarios_exerciciosWhereInput[]
    NOT?: prontuarios_exerciciosWhereInput | prontuarios_exerciciosWhereInput[]
    id_prontuario_exercicio?: IntFilter<"prontuarios_exercicios"> | number
    id_exercicio?: IntFilter<"prontuarios_exercicios"> | number
    id_prontuario?: IntFilter<"prontuarios_exercicios"> | number
    exercicios?: XOR<ExerciciosScalarRelationFilter, exerciciosWhereInput>
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
  }

  export type prontuarios_exerciciosOrderByWithRelationInput = {
    id_prontuario_exercicio?: SortOrder
    id_exercicio?: SortOrder
    id_prontuario?: SortOrder
    exercicios?: exerciciosOrderByWithRelationInput
    prontuarios?: prontuariosOrderByWithRelationInput
  }

  export type prontuarios_exerciciosWhereUniqueInput = Prisma.AtLeast<{
    id_prontuario_exercicio?: number
    AND?: prontuarios_exerciciosWhereInput | prontuarios_exerciciosWhereInput[]
    OR?: prontuarios_exerciciosWhereInput[]
    NOT?: prontuarios_exerciciosWhereInput | prontuarios_exerciciosWhereInput[]
    id_exercicio?: IntFilter<"prontuarios_exercicios"> | number
    id_prontuario?: IntFilter<"prontuarios_exercicios"> | number
    exercicios?: XOR<ExerciciosScalarRelationFilter, exerciciosWhereInput>
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
  }, "id_prontuario_exercicio">

  export type prontuarios_exerciciosOrderByWithAggregationInput = {
    id_prontuario_exercicio?: SortOrder
    id_exercicio?: SortOrder
    id_prontuario?: SortOrder
    _count?: prontuarios_exerciciosCountOrderByAggregateInput
    _avg?: prontuarios_exerciciosAvgOrderByAggregateInput
    _max?: prontuarios_exerciciosMaxOrderByAggregateInput
    _min?: prontuarios_exerciciosMinOrderByAggregateInput
    _sum?: prontuarios_exerciciosSumOrderByAggregateInput
  }

  export type prontuarios_exerciciosScalarWhereWithAggregatesInput = {
    AND?: prontuarios_exerciciosScalarWhereWithAggregatesInput | prontuarios_exerciciosScalarWhereWithAggregatesInput[]
    OR?: prontuarios_exerciciosScalarWhereWithAggregatesInput[]
    NOT?: prontuarios_exerciciosScalarWhereWithAggregatesInput | prontuarios_exerciciosScalarWhereWithAggregatesInput[]
    id_prontuario_exercicio?: IntWithAggregatesFilter<"prontuarios_exercicios"> | number
    id_exercicio?: IntWithAggregatesFilter<"prontuarios_exercicios"> | number
    id_prontuario?: IntWithAggregatesFilter<"prontuarios_exercicios"> | number
  }

  export type prontuarios_queixasWhereInput = {
    AND?: prontuarios_queixasWhereInput | prontuarios_queixasWhereInput[]
    OR?: prontuarios_queixasWhereInput[]
    NOT?: prontuarios_queixasWhereInput | prontuarios_queixasWhereInput[]
    id_prontuario_queixa?: IntFilter<"prontuarios_queixas"> | number
    id_prontuario?: IntFilter<"prontuarios_queixas"> | number
    id_queixa?: IntFilter<"prontuarios_queixas"> | number
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
    queixas?: XOR<QueixasScalarRelationFilter, queixasWhereInput>
  }

  export type prontuarios_queixasOrderByWithRelationInput = {
    id_prontuario_queixa?: SortOrder
    id_prontuario?: SortOrder
    id_queixa?: SortOrder
    prontuarios?: prontuariosOrderByWithRelationInput
    queixas?: queixasOrderByWithRelationInput
  }

  export type prontuarios_queixasWhereUniqueInput = Prisma.AtLeast<{
    id_prontuario_queixa?: number
    AND?: prontuarios_queixasWhereInput | prontuarios_queixasWhereInput[]
    OR?: prontuarios_queixasWhereInput[]
    NOT?: prontuarios_queixasWhereInput | prontuarios_queixasWhereInput[]
    id_prontuario?: IntFilter<"prontuarios_queixas"> | number
    id_queixa?: IntFilter<"prontuarios_queixas"> | number
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
    queixas?: XOR<QueixasScalarRelationFilter, queixasWhereInput>
  }, "id_prontuario_queixa">

  export type prontuarios_queixasOrderByWithAggregationInput = {
    id_prontuario_queixa?: SortOrder
    id_prontuario?: SortOrder
    id_queixa?: SortOrder
    _count?: prontuarios_queixasCountOrderByAggregateInput
    _avg?: prontuarios_queixasAvgOrderByAggregateInput
    _max?: prontuarios_queixasMaxOrderByAggregateInput
    _min?: prontuarios_queixasMinOrderByAggregateInput
    _sum?: prontuarios_queixasSumOrderByAggregateInput
  }

  export type prontuarios_queixasScalarWhereWithAggregatesInput = {
    AND?: prontuarios_queixasScalarWhereWithAggregatesInput | prontuarios_queixasScalarWhereWithAggregatesInput[]
    OR?: prontuarios_queixasScalarWhereWithAggregatesInput[]
    NOT?: prontuarios_queixasScalarWhereWithAggregatesInput | prontuarios_queixasScalarWhereWithAggregatesInput[]
    id_prontuario_queixa?: IntWithAggregatesFilter<"prontuarios_queixas"> | number
    id_prontuario?: IntWithAggregatesFilter<"prontuarios_queixas"> | number
    id_queixa?: IntWithAggregatesFilter<"prontuarios_queixas"> | number
  }

  export type prontuarios_sinaisWhereInput = {
    AND?: prontuarios_sinaisWhereInput | prontuarios_sinaisWhereInput[]
    OR?: prontuarios_sinaisWhereInput[]
    NOT?: prontuarios_sinaisWhereInput | prontuarios_sinaisWhereInput[]
    id_prontuario_sinal?: IntFilter<"prontuarios_sinais"> | number
    id_prontuario?: IntFilter<"prontuarios_sinais"> | number
    id_sinal?: IntFilter<"prontuarios_sinais"> | number
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
    sinais?: XOR<SinaisScalarRelationFilter, sinaisWhereInput>
  }

  export type prontuarios_sinaisOrderByWithRelationInput = {
    id_prontuario_sinal?: SortOrder
    id_prontuario?: SortOrder
    id_sinal?: SortOrder
    prontuarios?: prontuariosOrderByWithRelationInput
    sinais?: sinaisOrderByWithRelationInput
  }

  export type prontuarios_sinaisWhereUniqueInput = Prisma.AtLeast<{
    id_prontuario_sinal?: number
    AND?: prontuarios_sinaisWhereInput | prontuarios_sinaisWhereInput[]
    OR?: prontuarios_sinaisWhereInput[]
    NOT?: prontuarios_sinaisWhereInput | prontuarios_sinaisWhereInput[]
    id_prontuario?: IntFilter<"prontuarios_sinais"> | number
    id_sinal?: IntFilter<"prontuarios_sinais"> | number
    prontuarios?: XOR<ProntuariosScalarRelationFilter, prontuariosWhereInput>
    sinais?: XOR<SinaisScalarRelationFilter, sinaisWhereInput>
  }, "id_prontuario_sinal">

  export type prontuarios_sinaisOrderByWithAggregationInput = {
    id_prontuario_sinal?: SortOrder
    id_prontuario?: SortOrder
    id_sinal?: SortOrder
    _count?: prontuarios_sinaisCountOrderByAggregateInput
    _avg?: prontuarios_sinaisAvgOrderByAggregateInput
    _max?: prontuarios_sinaisMaxOrderByAggregateInput
    _min?: prontuarios_sinaisMinOrderByAggregateInput
    _sum?: prontuarios_sinaisSumOrderByAggregateInput
  }

  export type prontuarios_sinaisScalarWhereWithAggregatesInput = {
    AND?: prontuarios_sinaisScalarWhereWithAggregatesInput | prontuarios_sinaisScalarWhereWithAggregatesInput[]
    OR?: prontuarios_sinaisScalarWhereWithAggregatesInput[]
    NOT?: prontuarios_sinaisScalarWhereWithAggregatesInput | prontuarios_sinaisScalarWhereWithAggregatesInput[]
    id_prontuario_sinal?: IntWithAggregatesFilter<"prontuarios_sinais"> | number
    id_prontuario?: IntWithAggregatesFilter<"prontuarios_sinais"> | number
    id_sinal?: IntWithAggregatesFilter<"prontuarios_sinais"> | number
  }

  export type queixasWhereInput = {
    AND?: queixasWhereInput | queixasWhereInput[]
    OR?: queixasWhereInput[]
    NOT?: queixasWhereInput | queixasWhereInput[]
    id_queixa?: IntFilter<"queixas"> | number
    queixa?: StringFilter<"queixas"> | string
    data_queixa?: DateTimeFilter<"queixas"> | Date | string
    prontuarios_queixas?: Prontuarios_queixasListRelationFilter
  }

  export type queixasOrderByWithRelationInput = {
    id_queixa?: SortOrder
    queixa?: SortOrder
    data_queixa?: SortOrder
    prontuarios_queixas?: prontuarios_queixasOrderByRelationAggregateInput
  }

  export type queixasWhereUniqueInput = Prisma.AtLeast<{
    id_queixa?: number
    AND?: queixasWhereInput | queixasWhereInput[]
    OR?: queixasWhereInput[]
    NOT?: queixasWhereInput | queixasWhereInput[]
    queixa?: StringFilter<"queixas"> | string
    data_queixa?: DateTimeFilter<"queixas"> | Date | string
    prontuarios_queixas?: Prontuarios_queixasListRelationFilter
  }, "id_queixa">

  export type queixasOrderByWithAggregationInput = {
    id_queixa?: SortOrder
    queixa?: SortOrder
    data_queixa?: SortOrder
    _count?: queixasCountOrderByAggregateInput
    _avg?: queixasAvgOrderByAggregateInput
    _max?: queixasMaxOrderByAggregateInput
    _min?: queixasMinOrderByAggregateInput
    _sum?: queixasSumOrderByAggregateInput
  }

  export type queixasScalarWhereWithAggregatesInput = {
    AND?: queixasScalarWhereWithAggregatesInput | queixasScalarWhereWithAggregatesInput[]
    OR?: queixasScalarWhereWithAggregatesInput[]
    NOT?: queixasScalarWhereWithAggregatesInput | queixasScalarWhereWithAggregatesInput[]
    id_queixa?: IntWithAggregatesFilter<"queixas"> | number
    queixa?: StringWithAggregatesFilter<"queixas"> | string
    data_queixa?: DateTimeWithAggregatesFilter<"queixas"> | Date | string
  }

  export type sinaisWhereInput = {
    AND?: sinaisWhereInput | sinaisWhereInput[]
    OR?: sinaisWhereInput[]
    NOT?: sinaisWhereInput | sinaisWhereInput[]
    id_sinal?: IntFilter<"sinais"> | number
    sinal?: StringFilter<"sinais"> | string
    escala?: IntFilter<"sinais"> | number
    prontuarios_sinais?: Prontuarios_sinaisListRelationFilter
  }

  export type sinaisOrderByWithRelationInput = {
    id_sinal?: SortOrder
    sinal?: SortOrder
    escala?: SortOrder
    prontuarios_sinais?: prontuarios_sinaisOrderByRelationAggregateInput
  }

  export type sinaisWhereUniqueInput = Prisma.AtLeast<{
    id_sinal?: number
    AND?: sinaisWhereInput | sinaisWhereInput[]
    OR?: sinaisWhereInput[]
    NOT?: sinaisWhereInput | sinaisWhereInput[]
    sinal?: StringFilter<"sinais"> | string
    escala?: IntFilter<"sinais"> | number
    prontuarios_sinais?: Prontuarios_sinaisListRelationFilter
  }, "id_sinal">

  export type sinaisOrderByWithAggregationInput = {
    id_sinal?: SortOrder
    sinal?: SortOrder
    escala?: SortOrder
    _count?: sinaisCountOrderByAggregateInput
    _avg?: sinaisAvgOrderByAggregateInput
    _max?: sinaisMaxOrderByAggregateInput
    _min?: sinaisMinOrderByAggregateInput
    _sum?: sinaisSumOrderByAggregateInput
  }

  export type sinaisScalarWhereWithAggregatesInput = {
    AND?: sinaisScalarWhereWithAggregatesInput | sinaisScalarWhereWithAggregatesInput[]
    OR?: sinaisScalarWhereWithAggregatesInput[]
    NOT?: sinaisScalarWhereWithAggregatesInput | sinaisScalarWhereWithAggregatesInput[]
    id_sinal?: IntWithAggregatesFilter<"sinais"> | number
    sinal?: StringWithAggregatesFilter<"sinais"> | string
    escala?: IntWithAggregatesFilter<"sinais"> | number
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id_tag?: IntFilter<"tags"> | number
    tag?: StringFilter<"tags"> | string
    exericios_tags?: Exericios_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id_tag?: SortOrder
    tag?: SortOrder
    exericios_tags?: exericios_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id_tag?: number
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    tag?: StringFilter<"tags"> | string
    exericios_tags?: Exericios_tagsListRelationFilter
  }, "id_tag">

  export type tagsOrderByWithAggregationInput = {
    id_tag?: SortOrder
    tag?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id_tag?: IntWithAggregatesFilter<"tags"> | number
    tag?: StringWithAggregatesFilter<"tags"> | string
  }

  export type pacientesCreateInput = {
    is_ativo: boolean
    primeiro_acesso: boolean
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
    prontuarios?: prontuariosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateInput = {
    id_paciente: number
    is_ativo: boolean
    primeiro_acesso: boolean
    prontuarios?: prontuariosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUpdateInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
    prontuarios?: prontuariosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
    prontuarios?: prontuariosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateManyInput = {
    id_paciente: number
    is_ativo: boolean
    primeiro_acesso: boolean
  }

  export type pacientesUpdateManyMutationInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pacientesUncheckedUpdateManyInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type profissionaisCreateInput = {
    crm: string
    hash_palavra_chave: string
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateInput = {
    id_profissional: number
    crm: string
    hash_palavra_chave: string
  }

  export type profissionaisUpdateInput = {
    crm?: StringFieldUpdateOperationsInput | string
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    crm?: StringFieldUpdateOperationsInput | string
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisCreateManyInput = {
    id_profissional: number
    crm: string
    hash_palavra_chave: string
  }

  export type profissionaisUpdateManyMutationInput = {
    crm?: StringFieldUpdateOperationsInput | string
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisUncheckedUpdateManyInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    crm?: StringFieldUpdateOperationsInput | string
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosCreateInput = {
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type avaliacoesCreateInput = {
    avaliacao: string
    data_avaliacao: Date | string
    prontuarios_avaliacoes?: prontuarios_avaliacoesCreateNestedManyWithoutAvaliacoesInput
  }

  export type avaliacoesUncheckedCreateInput = {
    id_avaliacao?: number
    avaliacao: string
    data_avaliacao: Date | string
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedCreateNestedManyWithoutAvaliacoesInput
  }

  export type avaliacoesUpdateInput = {
    avaliacao?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuarios_avaliacoes?: prontuarios_avaliacoesUpdateManyWithoutAvaliacoesNestedInput
  }

  export type avaliacoesUncheckedUpdateInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedUpdateManyWithoutAvaliacoesNestedInput
  }

  export type avaliacoesCreateManyInput = {
    id_avaliacao?: number
    avaliacao: string
    data_avaliacao: Date | string
  }

  export type avaliacoesUpdateManyMutationInput = {
    avaliacao?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type avaliacoesUncheckedUpdateManyInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exerciciosCreateInput = {
    titulo: string
    descricao: string
    orientacoes: string
    exericios_tags?: exericios_tagsCreateNestedManyWithoutExerciciosInput
    imagens_exercicios?: imagens_exerciciosCreateNestedManyWithoutExerciciosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosUncheckedCreateInput = {
    id_exercicio?: number
    titulo: string
    descricao: string
    orientacoes: string
    exericios_tags?: exericios_tagsUncheckedCreateNestedManyWithoutExerciciosInput
    imagens_exercicios?: imagens_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUpdateManyWithoutExerciciosNestedInput
    imagens_exercicios?: imagens_exerciciosUpdateManyWithoutExerciciosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutExerciciosNestedInput
  }

  export type exerciciosUncheckedUpdateInput = {
    id_exercicio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUncheckedUpdateManyWithoutExerciciosNestedInput
    imagens_exercicios?: imagens_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput
  }

  export type exerciciosCreateManyInput = {
    id_exercicio?: number
    titulo: string
    descricao: string
    orientacoes: string
  }

  export type exerciciosUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
  }

  export type exerciciosUncheckedUpdateManyInput = {
    id_exercicio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
  }

  export type exericios_tagsCreateInput = {
    exercicios: exerciciosCreateNestedOneWithoutExericios_tagsInput
    tags: tagsCreateNestedOneWithoutExericios_tagsInput
  }

  export type exericios_tagsUncheckedCreateInput = {
    id_exercicio_tag?: number
    id_tag: number
    id_exercicio: number
  }

  export type exericios_tagsUpdateInput = {
    exercicios?: exerciciosUpdateOneRequiredWithoutExericios_tagsNestedInput
    tags?: tagsUpdateOneRequiredWithoutExericios_tagsNestedInput
  }

  export type exericios_tagsUncheckedUpdateInput = {
    id_exercicio_tag?: IntFieldUpdateOperationsInput | number
    id_tag?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type exericios_tagsCreateManyInput = {
    id_exercicio_tag?: number
    id_tag: number
    id_exercicio: number
  }

  export type exericios_tagsUpdateManyMutationInput = {

  }

  export type exericios_tagsUncheckedUpdateManyInput = {
    id_exercicio_tag?: IntFieldUpdateOperationsInput | number
    id_tag?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type imagens_exerciciosCreateInput = {
    link_imagem: string
    exercicios: exerciciosCreateNestedOneWithoutImagens_exerciciosInput
  }

  export type imagens_exerciciosUncheckedCreateInput = {
    id_imagem?: number
    link_imagem: string
    id_exercicio: number
  }

  export type imagens_exerciciosUpdateInput = {
    link_imagem?: StringFieldUpdateOperationsInput | string
    exercicios?: exerciciosUpdateOneRequiredWithoutImagens_exerciciosNestedInput
  }

  export type imagens_exerciciosUncheckedUpdateInput = {
    id_imagem?: IntFieldUpdateOperationsInput | number
    link_imagem?: StringFieldUpdateOperationsInput | string
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type imagens_exerciciosCreateManyInput = {
    id_imagem?: number
    link_imagem: string
    id_exercicio: number
  }

  export type imagens_exerciciosUpdateManyMutationInput = {
    link_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type imagens_exerciciosUncheckedUpdateManyInput = {
    id_imagem?: IntFieldUpdateOperationsInput | number
    link_imagem?: StringFieldUpdateOperationsInput | string
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type orientacoesCreateInput = {
    orientacao: string
    data_orientacao: Date | string
    prontuarios: prontuariosCreateNestedOneWithoutOrientacoesInput
  }

  export type orientacoesUncheckedCreateInput = {
    id_orientacao?: number
    orientacao: string
    data_orientacao: Date | string
    id_prontuario: number
  }

  export type orientacoesUpdateInput = {
    orientacao?: StringFieldUpdateOperationsInput | string
    data_orientacao?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuarios?: prontuariosUpdateOneRequiredWithoutOrientacoesNestedInput
  }

  export type orientacoesUncheckedUpdateInput = {
    id_orientacao?: IntFieldUpdateOperationsInput | number
    orientacao?: StringFieldUpdateOperationsInput | string
    data_orientacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type orientacoesCreateManyInput = {
    id_orientacao?: number
    orientacao: string
    data_orientacao: Date | string
    id_prontuario: number
  }

  export type orientacoesUpdateManyMutationInput = {
    orientacao?: StringFieldUpdateOperationsInput | string
    data_orientacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orientacoesUncheckedUpdateManyInput = {
    id_orientacao?: IntFieldUpdateOperationsInput | number
    orientacao?: StringFieldUpdateOperationsInput | string
    data_orientacao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuariosCreateInput = {
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    orientacoes?: orientacoesCreateNestedManyWithoutProntuariosInput
    pacientes: pacientesCreateNestedOneWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUncheckedCreateInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
    orientacoes?: orientacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUpdateInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    orientacoes?: orientacoesUpdateManyWithoutProntuariosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    id_paciente?: IntFieldUpdateOperationsInput | number
    orientacoes?: orientacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosCreateManyInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
  }

  export type prontuariosUpdateManyMutationInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
  }

  export type prontuariosUncheckedUpdateManyInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    id_paciente?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_avaliacoesCreateInput = {
    avaliacoes: avaliacoesCreateNestedOneWithoutProntuarios_avaliacoesInput
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_avaliacoesInput
  }

  export type prontuarios_avaliacoesUncheckedCreateInput = {
    id_prontuario_avaliacao?: number
    id_avaliacao: number
    id_prontuario: number
  }

  export type prontuarios_avaliacoesUpdateInput = {
    avaliacoes?: avaliacoesUpdateOneRequiredWithoutProntuarios_avaliacoesNestedInput
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_avaliacoesNestedInput
  }

  export type prontuarios_avaliacoesUncheckedUpdateInput = {
    id_prontuario_avaliacao?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_avaliacoesCreateManyInput = {
    id_prontuario_avaliacao?: number
    id_avaliacao: number
    id_prontuario: number
  }

  export type prontuarios_avaliacoesUpdateManyMutationInput = {

  }

  export type prontuarios_avaliacoesUncheckedUpdateManyInput = {
    id_prontuario_avaliacao?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_exerciciosCreateInput = {
    exercicios: exerciciosCreateNestedOneWithoutProntuarios_exerciciosInput
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_exerciciosInput
  }

  export type prontuarios_exerciciosUncheckedCreateInput = {
    id_prontuario_exercicio?: number
    id_exercicio: number
    id_prontuario: number
  }

  export type prontuarios_exerciciosUpdateInput = {
    exercicios?: exerciciosUpdateOneRequiredWithoutProntuarios_exerciciosNestedInput
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_exerciciosNestedInput
  }

  export type prontuarios_exerciciosUncheckedUpdateInput = {
    id_prontuario_exercicio?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_exerciciosCreateManyInput = {
    id_prontuario_exercicio?: number
    id_exercicio: number
    id_prontuario: number
  }

  export type prontuarios_exerciciosUpdateManyMutationInput = {

  }

  export type prontuarios_exerciciosUncheckedUpdateManyInput = {
    id_prontuario_exercicio?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_queixasCreateInput = {
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_queixasInput
    queixas: queixasCreateNestedOneWithoutProntuarios_queixasInput
  }

  export type prontuarios_queixasUncheckedCreateInput = {
    id_prontuario_queixa?: number
    id_prontuario: number
    id_queixa: number
  }

  export type prontuarios_queixasUpdateInput = {
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_queixasNestedInput
    queixas?: queixasUpdateOneRequiredWithoutProntuarios_queixasNestedInput
  }

  export type prontuarios_queixasUncheckedUpdateInput = {
    id_prontuario_queixa?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
    id_queixa?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_queixasCreateManyInput = {
    id_prontuario_queixa?: number
    id_prontuario: number
    id_queixa: number
  }

  export type prontuarios_queixasUpdateManyMutationInput = {

  }

  export type prontuarios_queixasUncheckedUpdateManyInput = {
    id_prontuario_queixa?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
    id_queixa?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_sinaisCreateInput = {
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_sinaisInput
    sinais: sinaisCreateNestedOneWithoutProntuarios_sinaisInput
  }

  export type prontuarios_sinaisUncheckedCreateInput = {
    id_prontuario_sinal?: number
    id_prontuario: number
    id_sinal: number
  }

  export type prontuarios_sinaisUpdateInput = {
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_sinaisNestedInput
    sinais?: sinaisUpdateOneRequiredWithoutProntuarios_sinaisNestedInput
  }

  export type prontuarios_sinaisUncheckedUpdateInput = {
    id_prontuario_sinal?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
    id_sinal?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_sinaisCreateManyInput = {
    id_prontuario_sinal?: number
    id_prontuario: number
    id_sinal: number
  }

  export type prontuarios_sinaisUpdateManyMutationInput = {

  }

  export type prontuarios_sinaisUncheckedUpdateManyInput = {
    id_prontuario_sinal?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
    id_sinal?: IntFieldUpdateOperationsInput | number
  }

  export type queixasCreateInput = {
    queixa: string
    data_queixa: Date | string
    prontuarios_queixas?: prontuarios_queixasCreateNestedManyWithoutQueixasInput
  }

  export type queixasUncheckedCreateInput = {
    id_queixa?: number
    queixa: string
    data_queixa: Date | string
    prontuarios_queixas?: prontuarios_queixasUncheckedCreateNestedManyWithoutQueixasInput
  }

  export type queixasUpdateInput = {
    queixa?: StringFieldUpdateOperationsInput | string
    data_queixa?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuarios_queixas?: prontuarios_queixasUpdateManyWithoutQueixasNestedInput
  }

  export type queixasUncheckedUpdateInput = {
    id_queixa?: IntFieldUpdateOperationsInput | number
    queixa?: StringFieldUpdateOperationsInput | string
    data_queixa?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuarios_queixas?: prontuarios_queixasUncheckedUpdateManyWithoutQueixasNestedInput
  }

  export type queixasCreateManyInput = {
    id_queixa?: number
    queixa: string
    data_queixa: Date | string
  }

  export type queixasUpdateManyMutationInput = {
    queixa?: StringFieldUpdateOperationsInput | string
    data_queixa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type queixasUncheckedUpdateManyInput = {
    id_queixa?: IntFieldUpdateOperationsInput | number
    queixa?: StringFieldUpdateOperationsInput | string
    data_queixa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sinaisCreateInput = {
    sinal: string
    escala: number
    prontuarios_sinais?: prontuarios_sinaisCreateNestedManyWithoutSinaisInput
  }

  export type sinaisUncheckedCreateInput = {
    id_sinal?: number
    sinal: string
    escala: number
    prontuarios_sinais?: prontuarios_sinaisUncheckedCreateNestedManyWithoutSinaisInput
  }

  export type sinaisUpdateInput = {
    sinal?: StringFieldUpdateOperationsInput | string
    escala?: IntFieldUpdateOperationsInput | number
    prontuarios_sinais?: prontuarios_sinaisUpdateManyWithoutSinaisNestedInput
  }

  export type sinaisUncheckedUpdateInput = {
    id_sinal?: IntFieldUpdateOperationsInput | number
    sinal?: StringFieldUpdateOperationsInput | string
    escala?: IntFieldUpdateOperationsInput | number
    prontuarios_sinais?: prontuarios_sinaisUncheckedUpdateManyWithoutSinaisNestedInput
  }

  export type sinaisCreateManyInput = {
    id_sinal?: number
    sinal: string
    escala: number
  }

  export type sinaisUpdateManyMutationInput = {
    sinal?: StringFieldUpdateOperationsInput | string
    escala?: IntFieldUpdateOperationsInput | number
  }

  export type sinaisUncheckedUpdateManyInput = {
    id_sinal?: IntFieldUpdateOperationsInput | number
    sinal?: StringFieldUpdateOperationsInput | string
    escala?: IntFieldUpdateOperationsInput | number
  }

  export type tagsCreateInput = {
    tag: string
    exericios_tags?: exericios_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id_tag?: number
    tag: string
    exericios_tags?: exericios_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id_tag?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id_tag?: number
    tag: string
  }

  export type tagsUpdateManyMutationInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id_tag?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type ProntuariosListRelationFilter = {
    every?: prontuariosWhereInput
    some?: prontuariosWhereInput
    none?: prontuariosWhereInput
  }

  export type prontuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pacientesCountOrderByAggregateInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
  }

  export type pacientesAvgOrderByAggregateInput = {
    id_paciente?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
  }

  export type pacientesSumOrderByAggregateInput = {
    id_paciente?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type profissionaisCountOrderByAggregateInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
    hash_palavra_chave?: SortOrder
  }

  export type profissionaisAvgOrderByAggregateInput = {
    id_profissional?: SortOrder
  }

  export type profissionaisMaxOrderByAggregateInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
    hash_palavra_chave?: SortOrder
  }

  export type profissionaisMinOrderByAggregateInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
    hash_palavra_chave?: SortOrder
  }

  export type profissionaisSumOrderByAggregateInput = {
    id_profissional?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PacientesNullableScalarRelationFilter = {
    is?: pacientesWhereInput | null
    isNot?: pacientesWhereInput | null
  }

  export type ProfissionaisNullableScalarRelationFilter = {
    is?: profissionaisWhereInput | null
    isNot?: profissionaisWhereInput | null
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Prontuarios_avaliacoesListRelationFilter = {
    every?: prontuarios_avaliacoesWhereInput
    some?: prontuarios_avaliacoesWhereInput
    none?: prontuarios_avaliacoesWhereInput
  }

  export type prontuarios_avaliacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type avaliacoesCountOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    avaliacao?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type avaliacoesAvgOrderByAggregateInput = {
    id_avaliacao?: SortOrder
  }

  export type avaliacoesMaxOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    avaliacao?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type avaliacoesMinOrderByAggregateInput = {
    id_avaliacao?: SortOrder
    avaliacao?: SortOrder
    data_avaliacao?: SortOrder
  }

  export type avaliacoesSumOrderByAggregateInput = {
    id_avaliacao?: SortOrder
  }

  export type Exericios_tagsListRelationFilter = {
    every?: exericios_tagsWhereInput
    some?: exericios_tagsWhereInput
    none?: exericios_tagsWhereInput
  }

  export type Imagens_exerciciosListRelationFilter = {
    every?: imagens_exerciciosWhereInput
    some?: imagens_exerciciosWhereInput
    none?: imagens_exerciciosWhereInput
  }

  export type Prontuarios_exerciciosListRelationFilter = {
    every?: prontuarios_exerciciosWhereInput
    some?: prontuarios_exerciciosWhereInput
    none?: prontuarios_exerciciosWhereInput
  }

  export type exericios_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imagens_exerciciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prontuarios_exerciciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exerciciosCountOrderByAggregateInput = {
    id_exercicio?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    orientacoes?: SortOrder
  }

  export type exerciciosAvgOrderByAggregateInput = {
    id_exercicio?: SortOrder
  }

  export type exerciciosMaxOrderByAggregateInput = {
    id_exercicio?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    orientacoes?: SortOrder
  }

  export type exerciciosMinOrderByAggregateInput = {
    id_exercicio?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    orientacoes?: SortOrder
  }

  export type exerciciosSumOrderByAggregateInput = {
    id_exercicio?: SortOrder
  }

  export type ExerciciosScalarRelationFilter = {
    is?: exerciciosWhereInput
    isNot?: exerciciosWhereInput
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type exericios_tagsCountOrderByAggregateInput = {
    id_exercicio_tag?: SortOrder
    id_tag?: SortOrder
    id_exercicio?: SortOrder
  }

  export type exericios_tagsAvgOrderByAggregateInput = {
    id_exercicio_tag?: SortOrder
    id_tag?: SortOrder
    id_exercicio?: SortOrder
  }

  export type exericios_tagsMaxOrderByAggregateInput = {
    id_exercicio_tag?: SortOrder
    id_tag?: SortOrder
    id_exercicio?: SortOrder
  }

  export type exericios_tagsMinOrderByAggregateInput = {
    id_exercicio_tag?: SortOrder
    id_tag?: SortOrder
    id_exercicio?: SortOrder
  }

  export type exericios_tagsSumOrderByAggregateInput = {
    id_exercicio_tag?: SortOrder
    id_tag?: SortOrder
    id_exercicio?: SortOrder
  }

  export type imagens_exerciciosCountOrderByAggregateInput = {
    id_imagem?: SortOrder
    link_imagem?: SortOrder
    id_exercicio?: SortOrder
  }

  export type imagens_exerciciosAvgOrderByAggregateInput = {
    id_imagem?: SortOrder
    id_exercicio?: SortOrder
  }

  export type imagens_exerciciosMaxOrderByAggregateInput = {
    id_imagem?: SortOrder
    link_imagem?: SortOrder
    id_exercicio?: SortOrder
  }

  export type imagens_exerciciosMinOrderByAggregateInput = {
    id_imagem?: SortOrder
    link_imagem?: SortOrder
    id_exercicio?: SortOrder
  }

  export type imagens_exerciciosSumOrderByAggregateInput = {
    id_imagem?: SortOrder
    id_exercicio?: SortOrder
  }

  export type ProntuariosScalarRelationFilter = {
    is?: prontuariosWhereInput
    isNot?: prontuariosWhereInput
  }

  export type orientacoesCountOrderByAggregateInput = {
    id_orientacao?: SortOrder
    orientacao?: SortOrder
    data_orientacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type orientacoesAvgOrderByAggregateInput = {
    id_orientacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type orientacoesMaxOrderByAggregateInput = {
    id_orientacao?: SortOrder
    orientacao?: SortOrder
    data_orientacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type orientacoesMinOrderByAggregateInput = {
    id_orientacao?: SortOrder
    orientacao?: SortOrder
    data_orientacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type orientacoesSumOrderByAggregateInput = {
    id_orientacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type Enumclassificacao_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_usuario | Enumclassificacao_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumclassificacao_usuarioFilter<$PrismaModel> | $Enums.classificacao_usuario
  }

  export type OrientacoesListRelationFilter = {
    every?: orientacoesWhereInput
    some?: orientacoesWhereInput
    none?: orientacoesWhereInput
  }

  export type PacientesScalarRelationFilter = {
    is?: pacientesWhereInput
    isNot?: pacientesWhereInput
  }

  export type Prontuarios_queixasListRelationFilter = {
    every?: prontuarios_queixasWhereInput
    some?: prontuarios_queixasWhereInput
    none?: prontuarios_queixasWhereInput
  }

  export type Prontuarios_sinaisListRelationFilter = {
    every?: prontuarios_sinaisWhereInput
    some?: prontuarios_sinaisWhereInput
    none?: prontuarios_sinaisWhereInput
  }

  export type orientacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prontuarios_queixasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prontuarios_sinaisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prontuariosCountOrderByAggregateInput = {
    id_prontuario?: SortOrder
    data_inicio_tratamento?: SortOrder
    classificacao?: SortOrder
    id_paciente?: SortOrder
  }

  export type prontuariosAvgOrderByAggregateInput = {
    id_prontuario?: SortOrder
    id_paciente?: SortOrder
  }

  export type prontuariosMaxOrderByAggregateInput = {
    id_prontuario?: SortOrder
    data_inicio_tratamento?: SortOrder
    classificacao?: SortOrder
    id_paciente?: SortOrder
  }

  export type prontuariosMinOrderByAggregateInput = {
    id_prontuario?: SortOrder
    data_inicio_tratamento?: SortOrder
    classificacao?: SortOrder
    id_paciente?: SortOrder
  }

  export type prontuariosSumOrderByAggregateInput = {
    id_prontuario?: SortOrder
    id_paciente?: SortOrder
  }

  export type Enumclassificacao_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_usuario | Enumclassificacao_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumclassificacao_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.classificacao_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassificacao_usuarioFilter<$PrismaModel>
    _max?: NestedEnumclassificacao_usuarioFilter<$PrismaModel>
  }

  export type AvaliacoesScalarRelationFilter = {
    is?: avaliacoesWhereInput
    isNot?: avaliacoesWhereInput
  }

  export type prontuarios_avaliacoesCountOrderByAggregateInput = {
    id_prontuario_avaliacao?: SortOrder
    id_avaliacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_avaliacoesAvgOrderByAggregateInput = {
    id_prontuario_avaliacao?: SortOrder
    id_avaliacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_avaliacoesMaxOrderByAggregateInput = {
    id_prontuario_avaliacao?: SortOrder
    id_avaliacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_avaliacoesMinOrderByAggregateInput = {
    id_prontuario_avaliacao?: SortOrder
    id_avaliacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_avaliacoesSumOrderByAggregateInput = {
    id_prontuario_avaliacao?: SortOrder
    id_avaliacao?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_exerciciosCountOrderByAggregateInput = {
    id_prontuario_exercicio?: SortOrder
    id_exercicio?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_exerciciosAvgOrderByAggregateInput = {
    id_prontuario_exercicio?: SortOrder
    id_exercicio?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_exerciciosMaxOrderByAggregateInput = {
    id_prontuario_exercicio?: SortOrder
    id_exercicio?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_exerciciosMinOrderByAggregateInput = {
    id_prontuario_exercicio?: SortOrder
    id_exercicio?: SortOrder
    id_prontuario?: SortOrder
  }

  export type prontuarios_exerciciosSumOrderByAggregateInput = {
    id_prontuario_exercicio?: SortOrder
    id_exercicio?: SortOrder
    id_prontuario?: SortOrder
  }

  export type QueixasScalarRelationFilter = {
    is?: queixasWhereInput
    isNot?: queixasWhereInput
  }

  export type prontuarios_queixasCountOrderByAggregateInput = {
    id_prontuario_queixa?: SortOrder
    id_prontuario?: SortOrder
    id_queixa?: SortOrder
  }

  export type prontuarios_queixasAvgOrderByAggregateInput = {
    id_prontuario_queixa?: SortOrder
    id_prontuario?: SortOrder
    id_queixa?: SortOrder
  }

  export type prontuarios_queixasMaxOrderByAggregateInput = {
    id_prontuario_queixa?: SortOrder
    id_prontuario?: SortOrder
    id_queixa?: SortOrder
  }

  export type prontuarios_queixasMinOrderByAggregateInput = {
    id_prontuario_queixa?: SortOrder
    id_prontuario?: SortOrder
    id_queixa?: SortOrder
  }

  export type prontuarios_queixasSumOrderByAggregateInput = {
    id_prontuario_queixa?: SortOrder
    id_prontuario?: SortOrder
    id_queixa?: SortOrder
  }

  export type SinaisScalarRelationFilter = {
    is?: sinaisWhereInput
    isNot?: sinaisWhereInput
  }

  export type prontuarios_sinaisCountOrderByAggregateInput = {
    id_prontuario_sinal?: SortOrder
    id_prontuario?: SortOrder
    id_sinal?: SortOrder
  }

  export type prontuarios_sinaisAvgOrderByAggregateInput = {
    id_prontuario_sinal?: SortOrder
    id_prontuario?: SortOrder
    id_sinal?: SortOrder
  }

  export type prontuarios_sinaisMaxOrderByAggregateInput = {
    id_prontuario_sinal?: SortOrder
    id_prontuario?: SortOrder
    id_sinal?: SortOrder
  }

  export type prontuarios_sinaisMinOrderByAggregateInput = {
    id_prontuario_sinal?: SortOrder
    id_prontuario?: SortOrder
    id_sinal?: SortOrder
  }

  export type prontuarios_sinaisSumOrderByAggregateInput = {
    id_prontuario_sinal?: SortOrder
    id_prontuario?: SortOrder
    id_sinal?: SortOrder
  }

  export type queixasCountOrderByAggregateInput = {
    id_queixa?: SortOrder
    queixa?: SortOrder
    data_queixa?: SortOrder
  }

  export type queixasAvgOrderByAggregateInput = {
    id_queixa?: SortOrder
  }

  export type queixasMaxOrderByAggregateInput = {
    id_queixa?: SortOrder
    queixa?: SortOrder
    data_queixa?: SortOrder
  }

  export type queixasMinOrderByAggregateInput = {
    id_queixa?: SortOrder
    queixa?: SortOrder
    data_queixa?: SortOrder
  }

  export type queixasSumOrderByAggregateInput = {
    id_queixa?: SortOrder
  }

  export type sinaisCountOrderByAggregateInput = {
    id_sinal?: SortOrder
    sinal?: SortOrder
    escala?: SortOrder
  }

  export type sinaisAvgOrderByAggregateInput = {
    id_sinal?: SortOrder
    escala?: SortOrder
  }

  export type sinaisMaxOrderByAggregateInput = {
    id_sinal?: SortOrder
    sinal?: SortOrder
    escala?: SortOrder
  }

  export type sinaisMinOrderByAggregateInput = {
    id_sinal?: SortOrder
    sinal?: SortOrder
    escala?: SortOrder
  }

  export type sinaisSumOrderByAggregateInput = {
    id_sinal?: SortOrder
    escala?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    id_tag?: SortOrder
    tag?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id_tag?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id_tag?: SortOrder
    tag?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id_tag?: SortOrder
    tag?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id_tag?: SortOrder
  }

  export type usuariosCreateNestedOneWithoutPacientesInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
  }

  export type prontuariosCreateNestedManyWithoutPacientesInput = {
    create?: XOR<prontuariosCreateWithoutPacientesInput, prontuariosUncheckedCreateWithoutPacientesInput> | prontuariosCreateWithoutPacientesInput[] | prontuariosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: prontuariosCreateOrConnectWithoutPacientesInput | prontuariosCreateOrConnectWithoutPacientesInput[]
    createMany?: prontuariosCreateManyPacientesInputEnvelope
    connect?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
  }

  export type prontuariosUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<prontuariosCreateWithoutPacientesInput, prontuariosUncheckedCreateWithoutPacientesInput> | prontuariosCreateWithoutPacientesInput[] | prontuariosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: prontuariosCreateOrConnectWithoutPacientesInput | prontuariosCreateOrConnectWithoutPacientesInput[]
    createMany?: prontuariosCreateManyPacientesInputEnvelope
    connect?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuariosUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    upsert?: usuariosUpsertWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPacientesInput, usuariosUpdateWithoutPacientesInput>, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type prontuariosUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<prontuariosCreateWithoutPacientesInput, prontuariosUncheckedCreateWithoutPacientesInput> | prontuariosCreateWithoutPacientesInput[] | prontuariosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: prontuariosCreateOrConnectWithoutPacientesInput | prontuariosCreateOrConnectWithoutPacientesInput[]
    upsert?: prontuariosUpsertWithWhereUniqueWithoutPacientesInput | prontuariosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: prontuariosCreateManyPacientesInputEnvelope
    set?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    disconnect?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    delete?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    connect?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    update?: prontuariosUpdateWithWhereUniqueWithoutPacientesInput | prontuariosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: prontuariosUpdateManyWithWhereWithoutPacientesInput | prontuariosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: prontuariosScalarWhereInput | prontuariosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type prontuariosUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<prontuariosCreateWithoutPacientesInput, prontuariosUncheckedCreateWithoutPacientesInput> | prontuariosCreateWithoutPacientesInput[] | prontuariosUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: prontuariosCreateOrConnectWithoutPacientesInput | prontuariosCreateOrConnectWithoutPacientesInput[]
    upsert?: prontuariosUpsertWithWhereUniqueWithoutPacientesInput | prontuariosUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: prontuariosCreateManyPacientesInputEnvelope
    set?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    disconnect?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    delete?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    connect?: prontuariosWhereUniqueInput | prontuariosWhereUniqueInput[]
    update?: prontuariosUpdateWithWhereUniqueWithoutPacientesInput | prontuariosUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: prontuariosUpdateManyWithWhereWithoutPacientesInput | prontuariosUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: prontuariosScalarWhereInput | prontuariosScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutProfissionaisInput = {
    create?: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProfissionaisInput
    connect?: usuariosWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usuariosUpdateOneRequiredWithoutProfissionaisNestedInput = {
    create?: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProfissionaisInput
    upsert?: usuariosUpsertWithoutProfissionaisInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutProfissionaisInput, usuariosUpdateWithoutProfissionaisInput>, usuariosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type pacientesCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    connect?: pacientesWhereUniqueInput
  }

  export type profissionaisCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    connect?: profissionaisWhereUniqueInput
  }

  export type pacientesUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    connect?: pacientesWhereUniqueInput
  }

  export type profissionaisUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    connect?: profissionaisWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type pacientesUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    upsert?: pacientesUpsertWithoutUsuariosInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsuariosInput, pacientesUpdateWithoutUsuariosInput>, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type profissionaisUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    upsert?: profissionaisUpsertWithoutUsuariosInput
    disconnect?: profissionaisWhereInput | boolean
    delete?: profissionaisWhereInput | boolean
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutUsuariosInput, profissionaisUpdateWithoutUsuariosInput>, profissionaisUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    upsert?: pacientesUpsertWithoutUsuariosInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsuariosInput, pacientesUpdateWithoutUsuariosInput>, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type profissionaisUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    upsert?: profissionaisUpsertWithoutUsuariosInput
    disconnect?: profissionaisWhereInput | boolean
    delete?: profissionaisWhereInput | boolean
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutUsuariosInput, profissionaisUpdateWithoutUsuariosInput>, profissionaisUncheckedUpdateWithoutUsuariosInput>
  }

  export type prontuarios_avaliacoesCreateNestedManyWithoutAvaliacoesInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput> | prontuarios_avaliacoesCreateWithoutAvaliacoesInput[] | prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput | prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput[]
    createMany?: prontuarios_avaliacoesCreateManyAvaliacoesInputEnvelope
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
  }

  export type prontuarios_avaliacoesUncheckedCreateNestedManyWithoutAvaliacoesInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput> | prontuarios_avaliacoesCreateWithoutAvaliacoesInput[] | prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput | prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput[]
    createMany?: prontuarios_avaliacoesCreateManyAvaliacoesInputEnvelope
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
  }

  export type prontuarios_avaliacoesUpdateManyWithoutAvaliacoesNestedInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput> | prontuarios_avaliacoesCreateWithoutAvaliacoesInput[] | prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput | prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput[]
    upsert?: prontuarios_avaliacoesUpsertWithWhereUniqueWithoutAvaliacoesInput | prontuarios_avaliacoesUpsertWithWhereUniqueWithoutAvaliacoesInput[]
    createMany?: prontuarios_avaliacoesCreateManyAvaliacoesInputEnvelope
    set?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    disconnect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    delete?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    update?: prontuarios_avaliacoesUpdateWithWhereUniqueWithoutAvaliacoesInput | prontuarios_avaliacoesUpdateWithWhereUniqueWithoutAvaliacoesInput[]
    updateMany?: prontuarios_avaliacoesUpdateManyWithWhereWithoutAvaliacoesInput | prontuarios_avaliacoesUpdateManyWithWhereWithoutAvaliacoesInput[]
    deleteMany?: prontuarios_avaliacoesScalarWhereInput | prontuarios_avaliacoesScalarWhereInput[]
  }

  export type prontuarios_avaliacoesUncheckedUpdateManyWithoutAvaliacoesNestedInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput> | prontuarios_avaliacoesCreateWithoutAvaliacoesInput[] | prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput | prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput[]
    upsert?: prontuarios_avaliacoesUpsertWithWhereUniqueWithoutAvaliacoesInput | prontuarios_avaliacoesUpsertWithWhereUniqueWithoutAvaliacoesInput[]
    createMany?: prontuarios_avaliacoesCreateManyAvaliacoesInputEnvelope
    set?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    disconnect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    delete?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    update?: prontuarios_avaliacoesUpdateWithWhereUniqueWithoutAvaliacoesInput | prontuarios_avaliacoesUpdateWithWhereUniqueWithoutAvaliacoesInput[]
    updateMany?: prontuarios_avaliacoesUpdateManyWithWhereWithoutAvaliacoesInput | prontuarios_avaliacoesUpdateManyWithWhereWithoutAvaliacoesInput[]
    deleteMany?: prontuarios_avaliacoesScalarWhereInput | prontuarios_avaliacoesScalarWhereInput[]
  }

  export type exericios_tagsCreateNestedManyWithoutExerciciosInput = {
    create?: XOR<exericios_tagsCreateWithoutExerciciosInput, exericios_tagsUncheckedCreateWithoutExerciciosInput> | exericios_tagsCreateWithoutExerciciosInput[] | exericios_tagsUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutExerciciosInput | exericios_tagsCreateOrConnectWithoutExerciciosInput[]
    createMany?: exericios_tagsCreateManyExerciciosInputEnvelope
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
  }

  export type imagens_exerciciosCreateNestedManyWithoutExerciciosInput = {
    create?: XOR<imagens_exerciciosCreateWithoutExerciciosInput, imagens_exerciciosUncheckedCreateWithoutExerciciosInput> | imagens_exerciciosCreateWithoutExerciciosInput[] | imagens_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: imagens_exerciciosCreateOrConnectWithoutExerciciosInput | imagens_exerciciosCreateOrConnectWithoutExerciciosInput[]
    createMany?: imagens_exerciciosCreateManyExerciciosInputEnvelope
    connect?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
  }

  export type prontuarios_exerciciosCreateNestedManyWithoutExerciciosInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutExerciciosInput, prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput> | prontuarios_exerciciosCreateWithoutExerciciosInput[] | prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput | prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput[]
    createMany?: prontuarios_exerciciosCreateManyExerciciosInputEnvelope
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
  }

  export type exericios_tagsUncheckedCreateNestedManyWithoutExerciciosInput = {
    create?: XOR<exericios_tagsCreateWithoutExerciciosInput, exericios_tagsUncheckedCreateWithoutExerciciosInput> | exericios_tagsCreateWithoutExerciciosInput[] | exericios_tagsUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutExerciciosInput | exericios_tagsCreateOrConnectWithoutExerciciosInput[]
    createMany?: exericios_tagsCreateManyExerciciosInputEnvelope
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
  }

  export type imagens_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput = {
    create?: XOR<imagens_exerciciosCreateWithoutExerciciosInput, imagens_exerciciosUncheckedCreateWithoutExerciciosInput> | imagens_exerciciosCreateWithoutExerciciosInput[] | imagens_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: imagens_exerciciosCreateOrConnectWithoutExerciciosInput | imagens_exerciciosCreateOrConnectWithoutExerciciosInput[]
    createMany?: imagens_exerciciosCreateManyExerciciosInputEnvelope
    connect?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
  }

  export type prontuarios_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutExerciciosInput, prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput> | prontuarios_exerciciosCreateWithoutExerciciosInput[] | prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput | prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput[]
    createMany?: prontuarios_exerciciosCreateManyExerciciosInputEnvelope
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
  }

  export type exericios_tagsUpdateManyWithoutExerciciosNestedInput = {
    create?: XOR<exericios_tagsCreateWithoutExerciciosInput, exericios_tagsUncheckedCreateWithoutExerciciosInput> | exericios_tagsCreateWithoutExerciciosInput[] | exericios_tagsUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutExerciciosInput | exericios_tagsCreateOrConnectWithoutExerciciosInput[]
    upsert?: exericios_tagsUpsertWithWhereUniqueWithoutExerciciosInput | exericios_tagsUpsertWithWhereUniqueWithoutExerciciosInput[]
    createMany?: exericios_tagsCreateManyExerciciosInputEnvelope
    set?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    disconnect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    delete?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    update?: exericios_tagsUpdateWithWhereUniqueWithoutExerciciosInput | exericios_tagsUpdateWithWhereUniqueWithoutExerciciosInput[]
    updateMany?: exericios_tagsUpdateManyWithWhereWithoutExerciciosInput | exericios_tagsUpdateManyWithWhereWithoutExerciciosInput[]
    deleteMany?: exericios_tagsScalarWhereInput | exericios_tagsScalarWhereInput[]
  }

  export type imagens_exerciciosUpdateManyWithoutExerciciosNestedInput = {
    create?: XOR<imagens_exerciciosCreateWithoutExerciciosInput, imagens_exerciciosUncheckedCreateWithoutExerciciosInput> | imagens_exerciciosCreateWithoutExerciciosInput[] | imagens_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: imagens_exerciciosCreateOrConnectWithoutExerciciosInput | imagens_exerciciosCreateOrConnectWithoutExerciciosInput[]
    upsert?: imagens_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput | imagens_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput[]
    createMany?: imagens_exerciciosCreateManyExerciciosInputEnvelope
    set?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    disconnect?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    delete?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    connect?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    update?: imagens_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput | imagens_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput[]
    updateMany?: imagens_exerciciosUpdateManyWithWhereWithoutExerciciosInput | imagens_exerciciosUpdateManyWithWhereWithoutExerciciosInput[]
    deleteMany?: imagens_exerciciosScalarWhereInput | imagens_exerciciosScalarWhereInput[]
  }

  export type prontuarios_exerciciosUpdateManyWithoutExerciciosNestedInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutExerciciosInput, prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput> | prontuarios_exerciciosCreateWithoutExerciciosInput[] | prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput | prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput[]
    upsert?: prontuarios_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput | prontuarios_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput[]
    createMany?: prontuarios_exerciciosCreateManyExerciciosInputEnvelope
    set?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    disconnect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    delete?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    update?: prontuarios_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput | prontuarios_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput[]
    updateMany?: prontuarios_exerciciosUpdateManyWithWhereWithoutExerciciosInput | prontuarios_exerciciosUpdateManyWithWhereWithoutExerciciosInput[]
    deleteMany?: prontuarios_exerciciosScalarWhereInput | prontuarios_exerciciosScalarWhereInput[]
  }

  export type exericios_tagsUncheckedUpdateManyWithoutExerciciosNestedInput = {
    create?: XOR<exericios_tagsCreateWithoutExerciciosInput, exericios_tagsUncheckedCreateWithoutExerciciosInput> | exericios_tagsCreateWithoutExerciciosInput[] | exericios_tagsUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutExerciciosInput | exericios_tagsCreateOrConnectWithoutExerciciosInput[]
    upsert?: exericios_tagsUpsertWithWhereUniqueWithoutExerciciosInput | exericios_tagsUpsertWithWhereUniqueWithoutExerciciosInput[]
    createMany?: exericios_tagsCreateManyExerciciosInputEnvelope
    set?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    disconnect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    delete?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    update?: exericios_tagsUpdateWithWhereUniqueWithoutExerciciosInput | exericios_tagsUpdateWithWhereUniqueWithoutExerciciosInput[]
    updateMany?: exericios_tagsUpdateManyWithWhereWithoutExerciciosInput | exericios_tagsUpdateManyWithWhereWithoutExerciciosInput[]
    deleteMany?: exericios_tagsScalarWhereInput | exericios_tagsScalarWhereInput[]
  }

  export type imagens_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput = {
    create?: XOR<imagens_exerciciosCreateWithoutExerciciosInput, imagens_exerciciosUncheckedCreateWithoutExerciciosInput> | imagens_exerciciosCreateWithoutExerciciosInput[] | imagens_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: imagens_exerciciosCreateOrConnectWithoutExerciciosInput | imagens_exerciciosCreateOrConnectWithoutExerciciosInput[]
    upsert?: imagens_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput | imagens_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput[]
    createMany?: imagens_exerciciosCreateManyExerciciosInputEnvelope
    set?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    disconnect?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    delete?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    connect?: imagens_exerciciosWhereUniqueInput | imagens_exerciciosWhereUniqueInput[]
    update?: imagens_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput | imagens_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput[]
    updateMany?: imagens_exerciciosUpdateManyWithWhereWithoutExerciciosInput | imagens_exerciciosUpdateManyWithWhereWithoutExerciciosInput[]
    deleteMany?: imagens_exerciciosScalarWhereInput | imagens_exerciciosScalarWhereInput[]
  }

  export type prontuarios_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutExerciciosInput, prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput> | prontuarios_exerciciosCreateWithoutExerciciosInput[] | prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput | prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput[]
    upsert?: prontuarios_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput | prontuarios_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput[]
    createMany?: prontuarios_exerciciosCreateManyExerciciosInputEnvelope
    set?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    disconnect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    delete?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    update?: prontuarios_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput | prontuarios_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput[]
    updateMany?: prontuarios_exerciciosUpdateManyWithWhereWithoutExerciciosInput | prontuarios_exerciciosUpdateManyWithWhereWithoutExerciciosInput[]
    deleteMany?: prontuarios_exerciciosScalarWhereInput | prontuarios_exerciciosScalarWhereInput[]
  }

  export type exerciciosCreateNestedOneWithoutExericios_tagsInput = {
    create?: XOR<exerciciosCreateWithoutExericios_tagsInput, exerciciosUncheckedCreateWithoutExericios_tagsInput>
    connectOrCreate?: exerciciosCreateOrConnectWithoutExericios_tagsInput
    connect?: exerciciosWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutExericios_tagsInput = {
    create?: XOR<tagsCreateWithoutExericios_tagsInput, tagsUncheckedCreateWithoutExericios_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutExericios_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type exerciciosUpdateOneRequiredWithoutExericios_tagsNestedInput = {
    create?: XOR<exerciciosCreateWithoutExericios_tagsInput, exerciciosUncheckedCreateWithoutExericios_tagsInput>
    connectOrCreate?: exerciciosCreateOrConnectWithoutExericios_tagsInput
    upsert?: exerciciosUpsertWithoutExericios_tagsInput
    connect?: exerciciosWhereUniqueInput
    update?: XOR<XOR<exerciciosUpdateToOneWithWhereWithoutExericios_tagsInput, exerciciosUpdateWithoutExericios_tagsInput>, exerciciosUncheckedUpdateWithoutExericios_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutExericios_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutExericios_tagsInput, tagsUncheckedCreateWithoutExericios_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutExericios_tagsInput
    upsert?: tagsUpsertWithoutExericios_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutExericios_tagsInput, tagsUpdateWithoutExericios_tagsInput>, tagsUncheckedUpdateWithoutExericios_tagsInput>
  }

  export type exerciciosCreateNestedOneWithoutImagens_exerciciosInput = {
    create?: XOR<exerciciosCreateWithoutImagens_exerciciosInput, exerciciosUncheckedCreateWithoutImagens_exerciciosInput>
    connectOrCreate?: exerciciosCreateOrConnectWithoutImagens_exerciciosInput
    connect?: exerciciosWhereUniqueInput
  }

  export type exerciciosUpdateOneRequiredWithoutImagens_exerciciosNestedInput = {
    create?: XOR<exerciciosCreateWithoutImagens_exerciciosInput, exerciciosUncheckedCreateWithoutImagens_exerciciosInput>
    connectOrCreate?: exerciciosCreateOrConnectWithoutImagens_exerciciosInput
    upsert?: exerciciosUpsertWithoutImagens_exerciciosInput
    connect?: exerciciosWhereUniqueInput
    update?: XOR<XOR<exerciciosUpdateToOneWithWhereWithoutImagens_exerciciosInput, exerciciosUpdateWithoutImagens_exerciciosInput>, exerciciosUncheckedUpdateWithoutImagens_exerciciosInput>
  }

  export type prontuariosCreateNestedOneWithoutOrientacoesInput = {
    create?: XOR<prontuariosCreateWithoutOrientacoesInput, prontuariosUncheckedCreateWithoutOrientacoesInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutOrientacoesInput
    connect?: prontuariosWhereUniqueInput
  }

  export type prontuariosUpdateOneRequiredWithoutOrientacoesNestedInput = {
    create?: XOR<prontuariosCreateWithoutOrientacoesInput, prontuariosUncheckedCreateWithoutOrientacoesInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutOrientacoesInput
    upsert?: prontuariosUpsertWithoutOrientacoesInput
    connect?: prontuariosWhereUniqueInput
    update?: XOR<XOR<prontuariosUpdateToOneWithWhereWithoutOrientacoesInput, prontuariosUpdateWithoutOrientacoesInput>, prontuariosUncheckedUpdateWithoutOrientacoesInput>
  }

  export type orientacoesCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<orientacoesCreateWithoutProntuariosInput, orientacoesUncheckedCreateWithoutProntuariosInput> | orientacoesCreateWithoutProntuariosInput[] | orientacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: orientacoesCreateOrConnectWithoutProntuariosInput | orientacoesCreateOrConnectWithoutProntuariosInput[]
    createMany?: orientacoesCreateManyProntuariosInputEnvelope
    connect?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
  }

  export type pacientesCreateNestedOneWithoutProntuariosInput = {
    create?: XOR<pacientesCreateWithoutProntuariosInput, pacientesUncheckedCreateWithoutProntuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutProntuariosInput
    connect?: pacientesWhereUniqueInput
  }

  export type prontuarios_avaliacoesCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput> | prontuarios_avaliacoesCreateWithoutProntuariosInput[] | prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput | prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_avaliacoesCreateManyProntuariosInputEnvelope
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
  }

  export type prontuarios_exerciciosCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutProntuariosInput, prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput> | prontuarios_exerciciosCreateWithoutProntuariosInput[] | prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput | prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_exerciciosCreateManyProntuariosInputEnvelope
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
  }

  export type prontuarios_queixasCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_queixasCreateWithoutProntuariosInput, prontuarios_queixasUncheckedCreateWithoutProntuariosInput> | prontuarios_queixasCreateWithoutProntuariosInput[] | prontuarios_queixasUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutProntuariosInput | prontuarios_queixasCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_queixasCreateManyProntuariosInputEnvelope
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
  }

  export type prontuarios_sinaisCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutProntuariosInput, prontuarios_sinaisUncheckedCreateWithoutProntuariosInput> | prontuarios_sinaisCreateWithoutProntuariosInput[] | prontuarios_sinaisUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutProntuariosInput | prontuarios_sinaisCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_sinaisCreateManyProntuariosInputEnvelope
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
  }

  export type orientacoesUncheckedCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<orientacoesCreateWithoutProntuariosInput, orientacoesUncheckedCreateWithoutProntuariosInput> | orientacoesCreateWithoutProntuariosInput[] | orientacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: orientacoesCreateOrConnectWithoutProntuariosInput | orientacoesCreateOrConnectWithoutProntuariosInput[]
    createMany?: orientacoesCreateManyProntuariosInputEnvelope
    connect?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
  }

  export type prontuarios_avaliacoesUncheckedCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput> | prontuarios_avaliacoesCreateWithoutProntuariosInput[] | prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput | prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_avaliacoesCreateManyProntuariosInputEnvelope
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
  }

  export type prontuarios_exerciciosUncheckedCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutProntuariosInput, prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput> | prontuarios_exerciciosCreateWithoutProntuariosInput[] | prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput | prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_exerciciosCreateManyProntuariosInputEnvelope
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
  }

  export type prontuarios_queixasUncheckedCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_queixasCreateWithoutProntuariosInput, prontuarios_queixasUncheckedCreateWithoutProntuariosInput> | prontuarios_queixasCreateWithoutProntuariosInput[] | prontuarios_queixasUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutProntuariosInput | prontuarios_queixasCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_queixasCreateManyProntuariosInputEnvelope
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
  }

  export type prontuarios_sinaisUncheckedCreateNestedManyWithoutProntuariosInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutProntuariosInput, prontuarios_sinaisUncheckedCreateWithoutProntuariosInput> | prontuarios_sinaisCreateWithoutProntuariosInput[] | prontuarios_sinaisUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutProntuariosInput | prontuarios_sinaisCreateOrConnectWithoutProntuariosInput[]
    createMany?: prontuarios_sinaisCreateManyProntuariosInputEnvelope
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
  }

  export type Enumclassificacao_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.classificacao_usuario
  }

  export type orientacoesUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<orientacoesCreateWithoutProntuariosInput, orientacoesUncheckedCreateWithoutProntuariosInput> | orientacoesCreateWithoutProntuariosInput[] | orientacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: orientacoesCreateOrConnectWithoutProntuariosInput | orientacoesCreateOrConnectWithoutProntuariosInput[]
    upsert?: orientacoesUpsertWithWhereUniqueWithoutProntuariosInput | orientacoesUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: orientacoesCreateManyProntuariosInputEnvelope
    set?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    disconnect?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    delete?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    connect?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    update?: orientacoesUpdateWithWhereUniqueWithoutProntuariosInput | orientacoesUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: orientacoesUpdateManyWithWhereWithoutProntuariosInput | orientacoesUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: orientacoesScalarWhereInput | orientacoesScalarWhereInput[]
  }

  export type pacientesUpdateOneRequiredWithoutProntuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutProntuariosInput, pacientesUncheckedCreateWithoutProntuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutProntuariosInput
    upsert?: pacientesUpsertWithoutProntuariosInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutProntuariosInput, pacientesUpdateWithoutProntuariosInput>, pacientesUncheckedUpdateWithoutProntuariosInput>
  }

  export type prontuarios_avaliacoesUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput> | prontuarios_avaliacoesCreateWithoutProntuariosInput[] | prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput | prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_avaliacoesUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_avaliacoesUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_avaliacoesCreateManyProntuariosInputEnvelope
    set?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    disconnect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    delete?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    update?: prontuarios_avaliacoesUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_avaliacoesUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_avaliacoesUpdateManyWithWhereWithoutProntuariosInput | prontuarios_avaliacoesUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_avaliacoesScalarWhereInput | prontuarios_avaliacoesScalarWhereInput[]
  }

  export type prontuarios_exerciciosUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutProntuariosInput, prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput> | prontuarios_exerciciosCreateWithoutProntuariosInput[] | prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput | prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_exerciciosUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_exerciciosUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_exerciciosCreateManyProntuariosInputEnvelope
    set?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    disconnect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    delete?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    update?: prontuarios_exerciciosUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_exerciciosUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_exerciciosUpdateManyWithWhereWithoutProntuariosInput | prontuarios_exerciciosUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_exerciciosScalarWhereInput | prontuarios_exerciciosScalarWhereInput[]
  }

  export type prontuarios_queixasUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_queixasCreateWithoutProntuariosInput, prontuarios_queixasUncheckedCreateWithoutProntuariosInput> | prontuarios_queixasCreateWithoutProntuariosInput[] | prontuarios_queixasUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutProntuariosInput | prontuarios_queixasCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_queixasUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_queixasUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_queixasCreateManyProntuariosInputEnvelope
    set?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    disconnect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    delete?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    update?: prontuarios_queixasUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_queixasUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_queixasUpdateManyWithWhereWithoutProntuariosInput | prontuarios_queixasUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_queixasScalarWhereInput | prontuarios_queixasScalarWhereInput[]
  }

  export type prontuarios_sinaisUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutProntuariosInput, prontuarios_sinaisUncheckedCreateWithoutProntuariosInput> | prontuarios_sinaisCreateWithoutProntuariosInput[] | prontuarios_sinaisUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutProntuariosInput | prontuarios_sinaisCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_sinaisUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_sinaisUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_sinaisCreateManyProntuariosInputEnvelope
    set?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    disconnect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    delete?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    update?: prontuarios_sinaisUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_sinaisUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_sinaisUpdateManyWithWhereWithoutProntuariosInput | prontuarios_sinaisUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_sinaisScalarWhereInput | prontuarios_sinaisScalarWhereInput[]
  }

  export type orientacoesUncheckedUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<orientacoesCreateWithoutProntuariosInput, orientacoesUncheckedCreateWithoutProntuariosInput> | orientacoesCreateWithoutProntuariosInput[] | orientacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: orientacoesCreateOrConnectWithoutProntuariosInput | orientacoesCreateOrConnectWithoutProntuariosInput[]
    upsert?: orientacoesUpsertWithWhereUniqueWithoutProntuariosInput | orientacoesUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: orientacoesCreateManyProntuariosInputEnvelope
    set?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    disconnect?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    delete?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    connect?: orientacoesWhereUniqueInput | orientacoesWhereUniqueInput[]
    update?: orientacoesUpdateWithWhereUniqueWithoutProntuariosInput | orientacoesUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: orientacoesUpdateManyWithWhereWithoutProntuariosInput | orientacoesUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: orientacoesScalarWhereInput | orientacoesScalarWhereInput[]
  }

  export type prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_avaliacoesCreateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput> | prontuarios_avaliacoesCreateWithoutProntuariosInput[] | prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput | prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_avaliacoesUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_avaliacoesUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_avaliacoesCreateManyProntuariosInputEnvelope
    set?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    disconnect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    delete?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    connect?: prontuarios_avaliacoesWhereUniqueInput | prontuarios_avaliacoesWhereUniqueInput[]
    update?: prontuarios_avaliacoesUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_avaliacoesUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_avaliacoesUpdateManyWithWhereWithoutProntuariosInput | prontuarios_avaliacoesUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_avaliacoesScalarWhereInput | prontuarios_avaliacoesScalarWhereInput[]
  }

  export type prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_exerciciosCreateWithoutProntuariosInput, prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput> | prontuarios_exerciciosCreateWithoutProntuariosInput[] | prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput | prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_exerciciosUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_exerciciosUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_exerciciosCreateManyProntuariosInputEnvelope
    set?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    disconnect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    delete?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    connect?: prontuarios_exerciciosWhereUniqueInput | prontuarios_exerciciosWhereUniqueInput[]
    update?: prontuarios_exerciciosUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_exerciciosUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_exerciciosUpdateManyWithWhereWithoutProntuariosInput | prontuarios_exerciciosUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_exerciciosScalarWhereInput | prontuarios_exerciciosScalarWhereInput[]
  }

  export type prontuarios_queixasUncheckedUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_queixasCreateWithoutProntuariosInput, prontuarios_queixasUncheckedCreateWithoutProntuariosInput> | prontuarios_queixasCreateWithoutProntuariosInput[] | prontuarios_queixasUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutProntuariosInput | prontuarios_queixasCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_queixasUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_queixasUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_queixasCreateManyProntuariosInputEnvelope
    set?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    disconnect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    delete?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    update?: prontuarios_queixasUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_queixasUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_queixasUpdateManyWithWhereWithoutProntuariosInput | prontuarios_queixasUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_queixasScalarWhereInput | prontuarios_queixasScalarWhereInput[]
  }

  export type prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosNestedInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutProntuariosInput, prontuarios_sinaisUncheckedCreateWithoutProntuariosInput> | prontuarios_sinaisCreateWithoutProntuariosInput[] | prontuarios_sinaisUncheckedCreateWithoutProntuariosInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutProntuariosInput | prontuarios_sinaisCreateOrConnectWithoutProntuariosInput[]
    upsert?: prontuarios_sinaisUpsertWithWhereUniqueWithoutProntuariosInput | prontuarios_sinaisUpsertWithWhereUniqueWithoutProntuariosInput[]
    createMany?: prontuarios_sinaisCreateManyProntuariosInputEnvelope
    set?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    disconnect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    delete?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    update?: prontuarios_sinaisUpdateWithWhereUniqueWithoutProntuariosInput | prontuarios_sinaisUpdateWithWhereUniqueWithoutProntuariosInput[]
    updateMany?: prontuarios_sinaisUpdateManyWithWhereWithoutProntuariosInput | prontuarios_sinaisUpdateManyWithWhereWithoutProntuariosInput[]
    deleteMany?: prontuarios_sinaisScalarWhereInput | prontuarios_sinaisScalarWhereInput[]
  }

  export type avaliacoesCreateNestedOneWithoutProntuarios_avaliacoesInput = {
    create?: XOR<avaliacoesCreateWithoutProntuarios_avaliacoesInput, avaliacoesUncheckedCreateWithoutProntuarios_avaliacoesInput>
    connectOrCreate?: avaliacoesCreateOrConnectWithoutProntuarios_avaliacoesInput
    connect?: avaliacoesWhereUniqueInput
  }

  export type prontuariosCreateNestedOneWithoutProntuarios_avaliacoesInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_avaliacoesInput, prontuariosUncheckedCreateWithoutProntuarios_avaliacoesInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_avaliacoesInput
    connect?: prontuariosWhereUniqueInput
  }

  export type avaliacoesUpdateOneRequiredWithoutProntuarios_avaliacoesNestedInput = {
    create?: XOR<avaliacoesCreateWithoutProntuarios_avaliacoesInput, avaliacoesUncheckedCreateWithoutProntuarios_avaliacoesInput>
    connectOrCreate?: avaliacoesCreateOrConnectWithoutProntuarios_avaliacoesInput
    upsert?: avaliacoesUpsertWithoutProntuarios_avaliacoesInput
    connect?: avaliacoesWhereUniqueInput
    update?: XOR<XOR<avaliacoesUpdateToOneWithWhereWithoutProntuarios_avaliacoesInput, avaliacoesUpdateWithoutProntuarios_avaliacoesInput>, avaliacoesUncheckedUpdateWithoutProntuarios_avaliacoesInput>
  }

  export type prontuariosUpdateOneRequiredWithoutProntuarios_avaliacoesNestedInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_avaliacoesInput, prontuariosUncheckedCreateWithoutProntuarios_avaliacoesInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_avaliacoesInput
    upsert?: prontuariosUpsertWithoutProntuarios_avaliacoesInput
    connect?: prontuariosWhereUniqueInput
    update?: XOR<XOR<prontuariosUpdateToOneWithWhereWithoutProntuarios_avaliacoesInput, prontuariosUpdateWithoutProntuarios_avaliacoesInput>, prontuariosUncheckedUpdateWithoutProntuarios_avaliacoesInput>
  }

  export type exerciciosCreateNestedOneWithoutProntuarios_exerciciosInput = {
    create?: XOR<exerciciosCreateWithoutProntuarios_exerciciosInput, exerciciosUncheckedCreateWithoutProntuarios_exerciciosInput>
    connectOrCreate?: exerciciosCreateOrConnectWithoutProntuarios_exerciciosInput
    connect?: exerciciosWhereUniqueInput
  }

  export type prontuariosCreateNestedOneWithoutProntuarios_exerciciosInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_exerciciosInput, prontuariosUncheckedCreateWithoutProntuarios_exerciciosInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_exerciciosInput
    connect?: prontuariosWhereUniqueInput
  }

  export type exerciciosUpdateOneRequiredWithoutProntuarios_exerciciosNestedInput = {
    create?: XOR<exerciciosCreateWithoutProntuarios_exerciciosInput, exerciciosUncheckedCreateWithoutProntuarios_exerciciosInput>
    connectOrCreate?: exerciciosCreateOrConnectWithoutProntuarios_exerciciosInput
    upsert?: exerciciosUpsertWithoutProntuarios_exerciciosInput
    connect?: exerciciosWhereUniqueInput
    update?: XOR<XOR<exerciciosUpdateToOneWithWhereWithoutProntuarios_exerciciosInput, exerciciosUpdateWithoutProntuarios_exerciciosInput>, exerciciosUncheckedUpdateWithoutProntuarios_exerciciosInput>
  }

  export type prontuariosUpdateOneRequiredWithoutProntuarios_exerciciosNestedInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_exerciciosInput, prontuariosUncheckedCreateWithoutProntuarios_exerciciosInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_exerciciosInput
    upsert?: prontuariosUpsertWithoutProntuarios_exerciciosInput
    connect?: prontuariosWhereUniqueInput
    update?: XOR<XOR<prontuariosUpdateToOneWithWhereWithoutProntuarios_exerciciosInput, prontuariosUpdateWithoutProntuarios_exerciciosInput>, prontuariosUncheckedUpdateWithoutProntuarios_exerciciosInput>
  }

  export type prontuariosCreateNestedOneWithoutProntuarios_queixasInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_queixasInput, prontuariosUncheckedCreateWithoutProntuarios_queixasInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_queixasInput
    connect?: prontuariosWhereUniqueInput
  }

  export type queixasCreateNestedOneWithoutProntuarios_queixasInput = {
    create?: XOR<queixasCreateWithoutProntuarios_queixasInput, queixasUncheckedCreateWithoutProntuarios_queixasInput>
    connectOrCreate?: queixasCreateOrConnectWithoutProntuarios_queixasInput
    connect?: queixasWhereUniqueInput
  }

  export type prontuariosUpdateOneRequiredWithoutProntuarios_queixasNestedInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_queixasInput, prontuariosUncheckedCreateWithoutProntuarios_queixasInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_queixasInput
    upsert?: prontuariosUpsertWithoutProntuarios_queixasInput
    connect?: prontuariosWhereUniqueInput
    update?: XOR<XOR<prontuariosUpdateToOneWithWhereWithoutProntuarios_queixasInput, prontuariosUpdateWithoutProntuarios_queixasInput>, prontuariosUncheckedUpdateWithoutProntuarios_queixasInput>
  }

  export type queixasUpdateOneRequiredWithoutProntuarios_queixasNestedInput = {
    create?: XOR<queixasCreateWithoutProntuarios_queixasInput, queixasUncheckedCreateWithoutProntuarios_queixasInput>
    connectOrCreate?: queixasCreateOrConnectWithoutProntuarios_queixasInput
    upsert?: queixasUpsertWithoutProntuarios_queixasInput
    connect?: queixasWhereUniqueInput
    update?: XOR<XOR<queixasUpdateToOneWithWhereWithoutProntuarios_queixasInput, queixasUpdateWithoutProntuarios_queixasInput>, queixasUncheckedUpdateWithoutProntuarios_queixasInput>
  }

  export type prontuariosCreateNestedOneWithoutProntuarios_sinaisInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_sinaisInput, prontuariosUncheckedCreateWithoutProntuarios_sinaisInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_sinaisInput
    connect?: prontuariosWhereUniqueInput
  }

  export type sinaisCreateNestedOneWithoutProntuarios_sinaisInput = {
    create?: XOR<sinaisCreateWithoutProntuarios_sinaisInput, sinaisUncheckedCreateWithoutProntuarios_sinaisInput>
    connectOrCreate?: sinaisCreateOrConnectWithoutProntuarios_sinaisInput
    connect?: sinaisWhereUniqueInput
  }

  export type prontuariosUpdateOneRequiredWithoutProntuarios_sinaisNestedInput = {
    create?: XOR<prontuariosCreateWithoutProntuarios_sinaisInput, prontuariosUncheckedCreateWithoutProntuarios_sinaisInput>
    connectOrCreate?: prontuariosCreateOrConnectWithoutProntuarios_sinaisInput
    upsert?: prontuariosUpsertWithoutProntuarios_sinaisInput
    connect?: prontuariosWhereUniqueInput
    update?: XOR<XOR<prontuariosUpdateToOneWithWhereWithoutProntuarios_sinaisInput, prontuariosUpdateWithoutProntuarios_sinaisInput>, prontuariosUncheckedUpdateWithoutProntuarios_sinaisInput>
  }

  export type sinaisUpdateOneRequiredWithoutProntuarios_sinaisNestedInput = {
    create?: XOR<sinaisCreateWithoutProntuarios_sinaisInput, sinaisUncheckedCreateWithoutProntuarios_sinaisInput>
    connectOrCreate?: sinaisCreateOrConnectWithoutProntuarios_sinaisInput
    upsert?: sinaisUpsertWithoutProntuarios_sinaisInput
    connect?: sinaisWhereUniqueInput
    update?: XOR<XOR<sinaisUpdateToOneWithWhereWithoutProntuarios_sinaisInput, sinaisUpdateWithoutProntuarios_sinaisInput>, sinaisUncheckedUpdateWithoutProntuarios_sinaisInput>
  }

  export type prontuarios_queixasCreateNestedManyWithoutQueixasInput = {
    create?: XOR<prontuarios_queixasCreateWithoutQueixasInput, prontuarios_queixasUncheckedCreateWithoutQueixasInput> | prontuarios_queixasCreateWithoutQueixasInput[] | prontuarios_queixasUncheckedCreateWithoutQueixasInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutQueixasInput | prontuarios_queixasCreateOrConnectWithoutQueixasInput[]
    createMany?: prontuarios_queixasCreateManyQueixasInputEnvelope
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
  }

  export type prontuarios_queixasUncheckedCreateNestedManyWithoutQueixasInput = {
    create?: XOR<prontuarios_queixasCreateWithoutQueixasInput, prontuarios_queixasUncheckedCreateWithoutQueixasInput> | prontuarios_queixasCreateWithoutQueixasInput[] | prontuarios_queixasUncheckedCreateWithoutQueixasInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutQueixasInput | prontuarios_queixasCreateOrConnectWithoutQueixasInput[]
    createMany?: prontuarios_queixasCreateManyQueixasInputEnvelope
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
  }

  export type prontuarios_queixasUpdateManyWithoutQueixasNestedInput = {
    create?: XOR<prontuarios_queixasCreateWithoutQueixasInput, prontuarios_queixasUncheckedCreateWithoutQueixasInput> | prontuarios_queixasCreateWithoutQueixasInput[] | prontuarios_queixasUncheckedCreateWithoutQueixasInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutQueixasInput | prontuarios_queixasCreateOrConnectWithoutQueixasInput[]
    upsert?: prontuarios_queixasUpsertWithWhereUniqueWithoutQueixasInput | prontuarios_queixasUpsertWithWhereUniqueWithoutQueixasInput[]
    createMany?: prontuarios_queixasCreateManyQueixasInputEnvelope
    set?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    disconnect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    delete?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    update?: prontuarios_queixasUpdateWithWhereUniqueWithoutQueixasInput | prontuarios_queixasUpdateWithWhereUniqueWithoutQueixasInput[]
    updateMany?: prontuarios_queixasUpdateManyWithWhereWithoutQueixasInput | prontuarios_queixasUpdateManyWithWhereWithoutQueixasInput[]
    deleteMany?: prontuarios_queixasScalarWhereInput | prontuarios_queixasScalarWhereInput[]
  }

  export type prontuarios_queixasUncheckedUpdateManyWithoutQueixasNestedInput = {
    create?: XOR<prontuarios_queixasCreateWithoutQueixasInput, prontuarios_queixasUncheckedCreateWithoutQueixasInput> | prontuarios_queixasCreateWithoutQueixasInput[] | prontuarios_queixasUncheckedCreateWithoutQueixasInput[]
    connectOrCreate?: prontuarios_queixasCreateOrConnectWithoutQueixasInput | prontuarios_queixasCreateOrConnectWithoutQueixasInput[]
    upsert?: prontuarios_queixasUpsertWithWhereUniqueWithoutQueixasInput | prontuarios_queixasUpsertWithWhereUniqueWithoutQueixasInput[]
    createMany?: prontuarios_queixasCreateManyQueixasInputEnvelope
    set?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    disconnect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    delete?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    connect?: prontuarios_queixasWhereUniqueInput | prontuarios_queixasWhereUniqueInput[]
    update?: prontuarios_queixasUpdateWithWhereUniqueWithoutQueixasInput | prontuarios_queixasUpdateWithWhereUniqueWithoutQueixasInput[]
    updateMany?: prontuarios_queixasUpdateManyWithWhereWithoutQueixasInput | prontuarios_queixasUpdateManyWithWhereWithoutQueixasInput[]
    deleteMany?: prontuarios_queixasScalarWhereInput | prontuarios_queixasScalarWhereInput[]
  }

  export type prontuarios_sinaisCreateNestedManyWithoutSinaisInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutSinaisInput, prontuarios_sinaisUncheckedCreateWithoutSinaisInput> | prontuarios_sinaisCreateWithoutSinaisInput[] | prontuarios_sinaisUncheckedCreateWithoutSinaisInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutSinaisInput | prontuarios_sinaisCreateOrConnectWithoutSinaisInput[]
    createMany?: prontuarios_sinaisCreateManySinaisInputEnvelope
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
  }

  export type prontuarios_sinaisUncheckedCreateNestedManyWithoutSinaisInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutSinaisInput, prontuarios_sinaisUncheckedCreateWithoutSinaisInput> | prontuarios_sinaisCreateWithoutSinaisInput[] | prontuarios_sinaisUncheckedCreateWithoutSinaisInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutSinaisInput | prontuarios_sinaisCreateOrConnectWithoutSinaisInput[]
    createMany?: prontuarios_sinaisCreateManySinaisInputEnvelope
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
  }

  export type prontuarios_sinaisUpdateManyWithoutSinaisNestedInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutSinaisInput, prontuarios_sinaisUncheckedCreateWithoutSinaisInput> | prontuarios_sinaisCreateWithoutSinaisInput[] | prontuarios_sinaisUncheckedCreateWithoutSinaisInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutSinaisInput | prontuarios_sinaisCreateOrConnectWithoutSinaisInput[]
    upsert?: prontuarios_sinaisUpsertWithWhereUniqueWithoutSinaisInput | prontuarios_sinaisUpsertWithWhereUniqueWithoutSinaisInput[]
    createMany?: prontuarios_sinaisCreateManySinaisInputEnvelope
    set?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    disconnect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    delete?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    update?: prontuarios_sinaisUpdateWithWhereUniqueWithoutSinaisInput | prontuarios_sinaisUpdateWithWhereUniqueWithoutSinaisInput[]
    updateMany?: prontuarios_sinaisUpdateManyWithWhereWithoutSinaisInput | prontuarios_sinaisUpdateManyWithWhereWithoutSinaisInput[]
    deleteMany?: prontuarios_sinaisScalarWhereInput | prontuarios_sinaisScalarWhereInput[]
  }

  export type prontuarios_sinaisUncheckedUpdateManyWithoutSinaisNestedInput = {
    create?: XOR<prontuarios_sinaisCreateWithoutSinaisInput, prontuarios_sinaisUncheckedCreateWithoutSinaisInput> | prontuarios_sinaisCreateWithoutSinaisInput[] | prontuarios_sinaisUncheckedCreateWithoutSinaisInput[]
    connectOrCreate?: prontuarios_sinaisCreateOrConnectWithoutSinaisInput | prontuarios_sinaisCreateOrConnectWithoutSinaisInput[]
    upsert?: prontuarios_sinaisUpsertWithWhereUniqueWithoutSinaisInput | prontuarios_sinaisUpsertWithWhereUniqueWithoutSinaisInput[]
    createMany?: prontuarios_sinaisCreateManySinaisInputEnvelope
    set?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    disconnect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    delete?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    connect?: prontuarios_sinaisWhereUniqueInput | prontuarios_sinaisWhereUniqueInput[]
    update?: prontuarios_sinaisUpdateWithWhereUniqueWithoutSinaisInput | prontuarios_sinaisUpdateWithWhereUniqueWithoutSinaisInput[]
    updateMany?: prontuarios_sinaisUpdateManyWithWhereWithoutSinaisInput | prontuarios_sinaisUpdateManyWithWhereWithoutSinaisInput[]
    deleteMany?: prontuarios_sinaisScalarWhereInput | prontuarios_sinaisScalarWhereInput[]
  }

  export type exericios_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<exericios_tagsCreateWithoutTagsInput, exericios_tagsUncheckedCreateWithoutTagsInput> | exericios_tagsCreateWithoutTagsInput[] | exericios_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutTagsInput | exericios_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: exericios_tagsCreateManyTagsInputEnvelope
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
  }

  export type exericios_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<exericios_tagsCreateWithoutTagsInput, exericios_tagsUncheckedCreateWithoutTagsInput> | exericios_tagsCreateWithoutTagsInput[] | exericios_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutTagsInput | exericios_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: exericios_tagsCreateManyTagsInputEnvelope
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
  }

  export type exericios_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<exericios_tagsCreateWithoutTagsInput, exericios_tagsUncheckedCreateWithoutTagsInput> | exericios_tagsCreateWithoutTagsInput[] | exericios_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutTagsInput | exericios_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: exericios_tagsUpsertWithWhereUniqueWithoutTagsInput | exericios_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: exericios_tagsCreateManyTagsInputEnvelope
    set?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    disconnect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    delete?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    update?: exericios_tagsUpdateWithWhereUniqueWithoutTagsInput | exericios_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: exericios_tagsUpdateManyWithWhereWithoutTagsInput | exericios_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: exericios_tagsScalarWhereInput | exericios_tagsScalarWhereInput[]
  }

  export type exericios_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<exericios_tagsCreateWithoutTagsInput, exericios_tagsUncheckedCreateWithoutTagsInput> | exericios_tagsCreateWithoutTagsInput[] | exericios_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: exericios_tagsCreateOrConnectWithoutTagsInput | exericios_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: exericios_tagsUpsertWithWhereUniqueWithoutTagsInput | exericios_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: exericios_tagsCreateManyTagsInputEnvelope
    set?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    disconnect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    delete?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    connect?: exericios_tagsWhereUniqueInput | exericios_tagsWhereUniqueInput[]
    update?: exericios_tagsUpdateWithWhereUniqueWithoutTagsInput | exericios_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: exericios_tagsUpdateManyWithWhereWithoutTagsInput | exericios_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: exericios_tagsScalarWhereInput | exericios_tagsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumclassificacao_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_usuario | Enumclassificacao_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumclassificacao_usuarioFilter<$PrismaModel> | $Enums.classificacao_usuario
  }

  export type NestedEnumclassificacao_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classificacao_usuario | Enumclassificacao_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.classificacao_usuario[] | ListEnumclassificacao_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumclassificacao_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.classificacao_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassificacao_usuarioFilter<$PrismaModel>
    _max?: NestedEnumclassificacao_usuarioFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutPacientesInput = {
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    profissionais?: profissionaisCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPacientesInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    profissionais?: profissionaisUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPacientesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
  }

  export type prontuariosCreateWithoutPacientesInput = {
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    orientacoes?: orientacoesCreateNestedManyWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUncheckedCreateWithoutPacientesInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    orientacoes?: orientacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosCreateOrConnectWithoutPacientesInput = {
    where: prontuariosWhereUniqueInput
    create: XOR<prontuariosCreateWithoutPacientesInput, prontuariosUncheckedCreateWithoutPacientesInput>
  }

  export type prontuariosCreateManyPacientesInputEnvelope = {
    data: prontuariosCreateManyPacientesInput | prontuariosCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutPacientesInput = {
    update: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPacientesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type usuariosUpdateWithoutPacientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    profissionais?: profissionaisUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPacientesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    profissionais?: profissionaisUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type prontuariosUpsertWithWhereUniqueWithoutPacientesInput = {
    where: prontuariosWhereUniqueInput
    update: XOR<prontuariosUpdateWithoutPacientesInput, prontuariosUncheckedUpdateWithoutPacientesInput>
    create: XOR<prontuariosCreateWithoutPacientesInput, prontuariosUncheckedCreateWithoutPacientesInput>
  }

  export type prontuariosUpdateWithWhereUniqueWithoutPacientesInput = {
    where: prontuariosWhereUniqueInput
    data: XOR<prontuariosUpdateWithoutPacientesInput, prontuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type prontuariosUpdateManyWithWhereWithoutPacientesInput = {
    where: prontuariosScalarWhereInput
    data: XOR<prontuariosUpdateManyMutationInput, prontuariosUncheckedUpdateManyWithoutPacientesInput>
  }

  export type prontuariosScalarWhereInput = {
    AND?: prontuariosScalarWhereInput | prontuariosScalarWhereInput[]
    OR?: prontuariosScalarWhereInput[]
    NOT?: prontuariosScalarWhereInput | prontuariosScalarWhereInput[]
    id_prontuario?: IntFilter<"prontuarios"> | number
    data_inicio_tratamento?: DateTimeFilter<"prontuarios"> | Date | string
    classificacao?: Enumclassificacao_usuarioFilter<"prontuarios"> | $Enums.classificacao_usuario
    id_paciente?: IntFilter<"prontuarios"> | number
  }

  export type usuariosCreateWithoutProfissionaisInput = {
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutProfissionaisInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutProfissionaisInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
  }

  export type usuariosUpsertWithoutProfissionaisInput = {
    update: XOR<usuariosUpdateWithoutProfissionaisInput, usuariosUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutProfissionaisInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutProfissionaisInput, usuariosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type usuariosUpdateWithoutProfissionaisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutProfissionaisInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type pacientesCreateWithoutUsuariosInput = {
    is_ativo: boolean
    primeiro_acesso: boolean
    prontuarios?: prontuariosCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutUsuariosInput = {
    is_ativo: boolean
    primeiro_acesso: boolean
    prontuarios?: prontuariosUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutUsuariosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
  }

  export type profissionaisCreateWithoutUsuariosInput = {
    crm: string
    hash_palavra_chave: string
  }

  export type profissionaisUncheckedCreateWithoutUsuariosInput = {
    crm: string
    hash_palavra_chave: string
  }

  export type profissionaisCreateOrConnectWithoutUsuariosInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
  }

  export type pacientesUpsertWithoutUsuariosInput = {
    update: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUpdateWithoutUsuariosInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
    prontuarios?: prontuariosUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutUsuariosInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
    prontuarios?: prontuariosUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type profissionaisUpsertWithoutUsuariosInput = {
    update: XOR<profissionaisUpdateWithoutUsuariosInput, profissionaisUncheckedUpdateWithoutUsuariosInput>
    create: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutUsuariosInput, profissionaisUncheckedUpdateWithoutUsuariosInput>
  }

  export type profissionaisUpdateWithoutUsuariosInput = {
    crm?: StringFieldUpdateOperationsInput | string
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisUncheckedUpdateWithoutUsuariosInput = {
    crm?: StringFieldUpdateOperationsInput | string
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type prontuarios_avaliacoesCreateWithoutAvaliacoesInput = {
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_avaliacoesInput
  }

  export type prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput = {
    id_prontuario_avaliacao?: number
    id_prontuario: number
  }

  export type prontuarios_avaliacoesCreateOrConnectWithoutAvaliacoesInput = {
    where: prontuarios_avaliacoesWhereUniqueInput
    create: XOR<prontuarios_avaliacoesCreateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput>
  }

  export type prontuarios_avaliacoesCreateManyAvaliacoesInputEnvelope = {
    data: prontuarios_avaliacoesCreateManyAvaliacoesInput | prontuarios_avaliacoesCreateManyAvaliacoesInput[]
    skipDuplicates?: boolean
  }

  export type prontuarios_avaliacoesUpsertWithWhereUniqueWithoutAvaliacoesInput = {
    where: prontuarios_avaliacoesWhereUniqueInput
    update: XOR<prontuarios_avaliacoesUpdateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<prontuarios_avaliacoesCreateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedCreateWithoutAvaliacoesInput>
  }

  export type prontuarios_avaliacoesUpdateWithWhereUniqueWithoutAvaliacoesInput = {
    where: prontuarios_avaliacoesWhereUniqueInput
    data: XOR<prontuarios_avaliacoesUpdateWithoutAvaliacoesInput, prontuarios_avaliacoesUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type prontuarios_avaliacoesUpdateManyWithWhereWithoutAvaliacoesInput = {
    where: prontuarios_avaliacoesScalarWhereInput
    data: XOR<prontuarios_avaliacoesUpdateManyMutationInput, prontuarios_avaliacoesUncheckedUpdateManyWithoutAvaliacoesInput>
  }

  export type prontuarios_avaliacoesScalarWhereInput = {
    AND?: prontuarios_avaliacoesScalarWhereInput | prontuarios_avaliacoesScalarWhereInput[]
    OR?: prontuarios_avaliacoesScalarWhereInput[]
    NOT?: prontuarios_avaliacoesScalarWhereInput | prontuarios_avaliacoesScalarWhereInput[]
    id_prontuario_avaliacao?: IntFilter<"prontuarios_avaliacoes"> | number
    id_avaliacao?: IntFilter<"prontuarios_avaliacoes"> | number
    id_prontuario?: IntFilter<"prontuarios_avaliacoes"> | number
  }

  export type exericios_tagsCreateWithoutExerciciosInput = {
    tags: tagsCreateNestedOneWithoutExericios_tagsInput
  }

  export type exericios_tagsUncheckedCreateWithoutExerciciosInput = {
    id_exercicio_tag?: number
    id_tag: number
  }

  export type exericios_tagsCreateOrConnectWithoutExerciciosInput = {
    where: exericios_tagsWhereUniqueInput
    create: XOR<exericios_tagsCreateWithoutExerciciosInput, exericios_tagsUncheckedCreateWithoutExerciciosInput>
  }

  export type exericios_tagsCreateManyExerciciosInputEnvelope = {
    data: exericios_tagsCreateManyExerciciosInput | exericios_tagsCreateManyExerciciosInput[]
    skipDuplicates?: boolean
  }

  export type imagens_exerciciosCreateWithoutExerciciosInput = {
    link_imagem: string
  }

  export type imagens_exerciciosUncheckedCreateWithoutExerciciosInput = {
    id_imagem?: number
    link_imagem: string
  }

  export type imagens_exerciciosCreateOrConnectWithoutExerciciosInput = {
    where: imagens_exerciciosWhereUniqueInput
    create: XOR<imagens_exerciciosCreateWithoutExerciciosInput, imagens_exerciciosUncheckedCreateWithoutExerciciosInput>
  }

  export type imagens_exerciciosCreateManyExerciciosInputEnvelope = {
    data: imagens_exerciciosCreateManyExerciciosInput | imagens_exerciciosCreateManyExerciciosInput[]
    skipDuplicates?: boolean
  }

  export type prontuarios_exerciciosCreateWithoutExerciciosInput = {
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_exerciciosInput
  }

  export type prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput = {
    id_prontuario_exercicio?: number
    id_prontuario: number
  }

  export type prontuarios_exerciciosCreateOrConnectWithoutExerciciosInput = {
    where: prontuarios_exerciciosWhereUniqueInput
    create: XOR<prontuarios_exerciciosCreateWithoutExerciciosInput, prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput>
  }

  export type prontuarios_exerciciosCreateManyExerciciosInputEnvelope = {
    data: prontuarios_exerciciosCreateManyExerciciosInput | prontuarios_exerciciosCreateManyExerciciosInput[]
    skipDuplicates?: boolean
  }

  export type exericios_tagsUpsertWithWhereUniqueWithoutExerciciosInput = {
    where: exericios_tagsWhereUniqueInput
    update: XOR<exericios_tagsUpdateWithoutExerciciosInput, exericios_tagsUncheckedUpdateWithoutExerciciosInput>
    create: XOR<exericios_tagsCreateWithoutExerciciosInput, exericios_tagsUncheckedCreateWithoutExerciciosInput>
  }

  export type exericios_tagsUpdateWithWhereUniqueWithoutExerciciosInput = {
    where: exericios_tagsWhereUniqueInput
    data: XOR<exericios_tagsUpdateWithoutExerciciosInput, exericios_tagsUncheckedUpdateWithoutExerciciosInput>
  }

  export type exericios_tagsUpdateManyWithWhereWithoutExerciciosInput = {
    where: exericios_tagsScalarWhereInput
    data: XOR<exericios_tagsUpdateManyMutationInput, exericios_tagsUncheckedUpdateManyWithoutExerciciosInput>
  }

  export type exericios_tagsScalarWhereInput = {
    AND?: exericios_tagsScalarWhereInput | exericios_tagsScalarWhereInput[]
    OR?: exericios_tagsScalarWhereInput[]
    NOT?: exericios_tagsScalarWhereInput | exericios_tagsScalarWhereInput[]
    id_exercicio_tag?: IntFilter<"exericios_tags"> | number
    id_tag?: IntFilter<"exericios_tags"> | number
    id_exercicio?: IntFilter<"exericios_tags"> | number
  }

  export type imagens_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput = {
    where: imagens_exerciciosWhereUniqueInput
    update: XOR<imagens_exerciciosUpdateWithoutExerciciosInput, imagens_exerciciosUncheckedUpdateWithoutExerciciosInput>
    create: XOR<imagens_exerciciosCreateWithoutExerciciosInput, imagens_exerciciosUncheckedCreateWithoutExerciciosInput>
  }

  export type imagens_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput = {
    where: imagens_exerciciosWhereUniqueInput
    data: XOR<imagens_exerciciosUpdateWithoutExerciciosInput, imagens_exerciciosUncheckedUpdateWithoutExerciciosInput>
  }

  export type imagens_exerciciosUpdateManyWithWhereWithoutExerciciosInput = {
    where: imagens_exerciciosScalarWhereInput
    data: XOR<imagens_exerciciosUpdateManyMutationInput, imagens_exerciciosUncheckedUpdateManyWithoutExerciciosInput>
  }

  export type imagens_exerciciosScalarWhereInput = {
    AND?: imagens_exerciciosScalarWhereInput | imagens_exerciciosScalarWhereInput[]
    OR?: imagens_exerciciosScalarWhereInput[]
    NOT?: imagens_exerciciosScalarWhereInput | imagens_exerciciosScalarWhereInput[]
    id_imagem?: IntFilter<"imagens_exercicios"> | number
    link_imagem?: StringFilter<"imagens_exercicios"> | string
    id_exercicio?: IntFilter<"imagens_exercicios"> | number
  }

  export type prontuarios_exerciciosUpsertWithWhereUniqueWithoutExerciciosInput = {
    where: prontuarios_exerciciosWhereUniqueInput
    update: XOR<prontuarios_exerciciosUpdateWithoutExerciciosInput, prontuarios_exerciciosUncheckedUpdateWithoutExerciciosInput>
    create: XOR<prontuarios_exerciciosCreateWithoutExerciciosInput, prontuarios_exerciciosUncheckedCreateWithoutExerciciosInput>
  }

  export type prontuarios_exerciciosUpdateWithWhereUniqueWithoutExerciciosInput = {
    where: prontuarios_exerciciosWhereUniqueInput
    data: XOR<prontuarios_exerciciosUpdateWithoutExerciciosInput, prontuarios_exerciciosUncheckedUpdateWithoutExerciciosInput>
  }

  export type prontuarios_exerciciosUpdateManyWithWhereWithoutExerciciosInput = {
    where: prontuarios_exerciciosScalarWhereInput
    data: XOR<prontuarios_exerciciosUpdateManyMutationInput, prontuarios_exerciciosUncheckedUpdateManyWithoutExerciciosInput>
  }

  export type prontuarios_exerciciosScalarWhereInput = {
    AND?: prontuarios_exerciciosScalarWhereInput | prontuarios_exerciciosScalarWhereInput[]
    OR?: prontuarios_exerciciosScalarWhereInput[]
    NOT?: prontuarios_exerciciosScalarWhereInput | prontuarios_exerciciosScalarWhereInput[]
    id_prontuario_exercicio?: IntFilter<"prontuarios_exercicios"> | number
    id_exercicio?: IntFilter<"prontuarios_exercicios"> | number
    id_prontuario?: IntFilter<"prontuarios_exercicios"> | number
  }

  export type exerciciosCreateWithoutExericios_tagsInput = {
    titulo: string
    descricao: string
    orientacoes: string
    imagens_exercicios?: imagens_exerciciosCreateNestedManyWithoutExerciciosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosUncheckedCreateWithoutExericios_tagsInput = {
    id_exercicio?: number
    titulo: string
    descricao: string
    orientacoes: string
    imagens_exercicios?: imagens_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosCreateOrConnectWithoutExericios_tagsInput = {
    where: exerciciosWhereUniqueInput
    create: XOR<exerciciosCreateWithoutExericios_tagsInput, exerciciosUncheckedCreateWithoutExericios_tagsInput>
  }

  export type tagsCreateWithoutExericios_tagsInput = {
    tag: string
  }

  export type tagsUncheckedCreateWithoutExericios_tagsInput = {
    id_tag?: number
    tag: string
  }

  export type tagsCreateOrConnectWithoutExericios_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutExericios_tagsInput, tagsUncheckedCreateWithoutExericios_tagsInput>
  }

  export type exerciciosUpsertWithoutExericios_tagsInput = {
    update: XOR<exerciciosUpdateWithoutExericios_tagsInput, exerciciosUncheckedUpdateWithoutExericios_tagsInput>
    create: XOR<exerciciosCreateWithoutExericios_tagsInput, exerciciosUncheckedCreateWithoutExericios_tagsInput>
    where?: exerciciosWhereInput
  }

  export type exerciciosUpdateToOneWithWhereWithoutExericios_tagsInput = {
    where?: exerciciosWhereInput
    data: XOR<exerciciosUpdateWithoutExericios_tagsInput, exerciciosUncheckedUpdateWithoutExericios_tagsInput>
  }

  export type exerciciosUpdateWithoutExericios_tagsInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    imagens_exercicios?: imagens_exerciciosUpdateManyWithoutExerciciosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutExerciciosNestedInput
  }

  export type exerciciosUncheckedUpdateWithoutExericios_tagsInput = {
    id_exercicio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    imagens_exercicios?: imagens_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput
  }

  export type tagsUpsertWithoutExericios_tagsInput = {
    update: XOR<tagsUpdateWithoutExericios_tagsInput, tagsUncheckedUpdateWithoutExericios_tagsInput>
    create: XOR<tagsCreateWithoutExericios_tagsInput, tagsUncheckedCreateWithoutExericios_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutExericios_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutExericios_tagsInput, tagsUncheckedUpdateWithoutExericios_tagsInput>
  }

  export type tagsUpdateWithoutExericios_tagsInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateWithoutExericios_tagsInput = {
    id_tag?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type exerciciosCreateWithoutImagens_exerciciosInput = {
    titulo: string
    descricao: string
    orientacoes: string
    exericios_tags?: exericios_tagsCreateNestedManyWithoutExerciciosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosUncheckedCreateWithoutImagens_exerciciosInput = {
    id_exercicio?: number
    titulo: string
    descricao: string
    orientacoes: string
    exericios_tags?: exericios_tagsUncheckedCreateNestedManyWithoutExerciciosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosCreateOrConnectWithoutImagens_exerciciosInput = {
    where: exerciciosWhereUniqueInput
    create: XOR<exerciciosCreateWithoutImagens_exerciciosInput, exerciciosUncheckedCreateWithoutImagens_exerciciosInput>
  }

  export type exerciciosUpsertWithoutImagens_exerciciosInput = {
    update: XOR<exerciciosUpdateWithoutImagens_exerciciosInput, exerciciosUncheckedUpdateWithoutImagens_exerciciosInput>
    create: XOR<exerciciosCreateWithoutImagens_exerciciosInput, exerciciosUncheckedCreateWithoutImagens_exerciciosInput>
    where?: exerciciosWhereInput
  }

  export type exerciciosUpdateToOneWithWhereWithoutImagens_exerciciosInput = {
    where?: exerciciosWhereInput
    data: XOR<exerciciosUpdateWithoutImagens_exerciciosInput, exerciciosUncheckedUpdateWithoutImagens_exerciciosInput>
  }

  export type exerciciosUpdateWithoutImagens_exerciciosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUpdateManyWithoutExerciciosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutExerciciosNestedInput
  }

  export type exerciciosUncheckedUpdateWithoutImagens_exerciciosInput = {
    id_exercicio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUncheckedUpdateManyWithoutExerciciosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput
  }

  export type prontuariosCreateWithoutOrientacoesInput = {
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    pacientes: pacientesCreateNestedOneWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUncheckedCreateWithoutOrientacoesInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosCreateOrConnectWithoutOrientacoesInput = {
    where: prontuariosWhereUniqueInput
    create: XOR<prontuariosCreateWithoutOrientacoesInput, prontuariosUncheckedCreateWithoutOrientacoesInput>
  }

  export type prontuariosUpsertWithoutOrientacoesInput = {
    update: XOR<prontuariosUpdateWithoutOrientacoesInput, prontuariosUncheckedUpdateWithoutOrientacoesInput>
    create: XOR<prontuariosCreateWithoutOrientacoesInput, prontuariosUncheckedCreateWithoutOrientacoesInput>
    where?: prontuariosWhereInput
  }

  export type prontuariosUpdateToOneWithWhereWithoutOrientacoesInput = {
    where?: prontuariosWhereInput
    data: XOR<prontuariosUpdateWithoutOrientacoesInput, prontuariosUncheckedUpdateWithoutOrientacoesInput>
  }

  export type prontuariosUpdateWithoutOrientacoesInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    pacientes?: pacientesUpdateOneRequiredWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateWithoutOrientacoesInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    id_paciente?: IntFieldUpdateOperationsInput | number
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosNestedInput
  }

  export type orientacoesCreateWithoutProntuariosInput = {
    orientacao: string
    data_orientacao: Date | string
  }

  export type orientacoesUncheckedCreateWithoutProntuariosInput = {
    id_orientacao?: number
    orientacao: string
    data_orientacao: Date | string
  }

  export type orientacoesCreateOrConnectWithoutProntuariosInput = {
    where: orientacoesWhereUniqueInput
    create: XOR<orientacoesCreateWithoutProntuariosInput, orientacoesUncheckedCreateWithoutProntuariosInput>
  }

  export type orientacoesCreateManyProntuariosInputEnvelope = {
    data: orientacoesCreateManyProntuariosInput | orientacoesCreateManyProntuariosInput[]
    skipDuplicates?: boolean
  }

  export type pacientesCreateWithoutProntuariosInput = {
    is_ativo: boolean
    primeiro_acesso: boolean
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutProntuariosInput = {
    id_paciente: number
    is_ativo: boolean
    primeiro_acesso: boolean
  }

  export type pacientesCreateOrConnectWithoutProntuariosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutProntuariosInput, pacientesUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_avaliacoesCreateWithoutProntuariosInput = {
    avaliacoes: avaliacoesCreateNestedOneWithoutProntuarios_avaliacoesInput
  }

  export type prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput = {
    id_prontuario_avaliacao?: number
    id_avaliacao: number
  }

  export type prontuarios_avaliacoesCreateOrConnectWithoutProntuariosInput = {
    where: prontuarios_avaliacoesWhereUniqueInput
    create: XOR<prontuarios_avaliacoesCreateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_avaliacoesCreateManyProntuariosInputEnvelope = {
    data: prontuarios_avaliacoesCreateManyProntuariosInput | prontuarios_avaliacoesCreateManyProntuariosInput[]
    skipDuplicates?: boolean
  }

  export type prontuarios_exerciciosCreateWithoutProntuariosInput = {
    exercicios: exerciciosCreateNestedOneWithoutProntuarios_exerciciosInput
  }

  export type prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput = {
    id_prontuario_exercicio?: number
    id_exercicio: number
  }

  export type prontuarios_exerciciosCreateOrConnectWithoutProntuariosInput = {
    where: prontuarios_exerciciosWhereUniqueInput
    create: XOR<prontuarios_exerciciosCreateWithoutProntuariosInput, prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_exerciciosCreateManyProntuariosInputEnvelope = {
    data: prontuarios_exerciciosCreateManyProntuariosInput | prontuarios_exerciciosCreateManyProntuariosInput[]
    skipDuplicates?: boolean
  }

  export type prontuarios_queixasCreateWithoutProntuariosInput = {
    queixas: queixasCreateNestedOneWithoutProntuarios_queixasInput
  }

  export type prontuarios_queixasUncheckedCreateWithoutProntuariosInput = {
    id_prontuario_queixa?: number
    id_queixa: number
  }

  export type prontuarios_queixasCreateOrConnectWithoutProntuariosInput = {
    where: prontuarios_queixasWhereUniqueInput
    create: XOR<prontuarios_queixasCreateWithoutProntuariosInput, prontuarios_queixasUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_queixasCreateManyProntuariosInputEnvelope = {
    data: prontuarios_queixasCreateManyProntuariosInput | prontuarios_queixasCreateManyProntuariosInput[]
    skipDuplicates?: boolean
  }

  export type prontuarios_sinaisCreateWithoutProntuariosInput = {
    sinais: sinaisCreateNestedOneWithoutProntuarios_sinaisInput
  }

  export type prontuarios_sinaisUncheckedCreateWithoutProntuariosInput = {
    id_prontuario_sinal?: number
    id_sinal: number
  }

  export type prontuarios_sinaisCreateOrConnectWithoutProntuariosInput = {
    where: prontuarios_sinaisWhereUniqueInput
    create: XOR<prontuarios_sinaisCreateWithoutProntuariosInput, prontuarios_sinaisUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_sinaisCreateManyProntuariosInputEnvelope = {
    data: prontuarios_sinaisCreateManyProntuariosInput | prontuarios_sinaisCreateManyProntuariosInput[]
    skipDuplicates?: boolean
  }

  export type orientacoesUpsertWithWhereUniqueWithoutProntuariosInput = {
    where: orientacoesWhereUniqueInput
    update: XOR<orientacoesUpdateWithoutProntuariosInput, orientacoesUncheckedUpdateWithoutProntuariosInput>
    create: XOR<orientacoesCreateWithoutProntuariosInput, orientacoesUncheckedCreateWithoutProntuariosInput>
  }

  export type orientacoesUpdateWithWhereUniqueWithoutProntuariosInput = {
    where: orientacoesWhereUniqueInput
    data: XOR<orientacoesUpdateWithoutProntuariosInput, orientacoesUncheckedUpdateWithoutProntuariosInput>
  }

  export type orientacoesUpdateManyWithWhereWithoutProntuariosInput = {
    where: orientacoesScalarWhereInput
    data: XOR<orientacoesUpdateManyMutationInput, orientacoesUncheckedUpdateManyWithoutProntuariosInput>
  }

  export type orientacoesScalarWhereInput = {
    AND?: orientacoesScalarWhereInput | orientacoesScalarWhereInput[]
    OR?: orientacoesScalarWhereInput[]
    NOT?: orientacoesScalarWhereInput | orientacoesScalarWhereInput[]
    id_orientacao?: IntFilter<"orientacoes"> | number
    orientacao?: StringFilter<"orientacoes"> | string
    data_orientacao?: DateTimeFilter<"orientacoes"> | Date | string
    id_prontuario?: IntFilter<"orientacoes"> | number
  }

  export type pacientesUpsertWithoutProntuariosInput = {
    update: XOR<pacientesUpdateWithoutProntuariosInput, pacientesUncheckedUpdateWithoutProntuariosInput>
    create: XOR<pacientesCreateWithoutProntuariosInput, pacientesUncheckedCreateWithoutProntuariosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutProntuariosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutProntuariosInput, pacientesUncheckedUpdateWithoutProntuariosInput>
  }

  export type pacientesUpdateWithoutProntuariosInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutProntuariosInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type prontuarios_avaliacoesUpsertWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_avaliacoesWhereUniqueInput
    update: XOR<prontuarios_avaliacoesUpdateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedUpdateWithoutProntuariosInput>
    create: XOR<prontuarios_avaliacoesCreateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_avaliacoesUpdateWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_avaliacoesWhereUniqueInput
    data: XOR<prontuarios_avaliacoesUpdateWithoutProntuariosInput, prontuarios_avaliacoesUncheckedUpdateWithoutProntuariosInput>
  }

  export type prontuarios_avaliacoesUpdateManyWithWhereWithoutProntuariosInput = {
    where: prontuarios_avaliacoesScalarWhereInput
    data: XOR<prontuarios_avaliacoesUpdateManyMutationInput, prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosInput>
  }

  export type prontuarios_exerciciosUpsertWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_exerciciosWhereUniqueInput
    update: XOR<prontuarios_exerciciosUpdateWithoutProntuariosInput, prontuarios_exerciciosUncheckedUpdateWithoutProntuariosInput>
    create: XOR<prontuarios_exerciciosCreateWithoutProntuariosInput, prontuarios_exerciciosUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_exerciciosUpdateWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_exerciciosWhereUniqueInput
    data: XOR<prontuarios_exerciciosUpdateWithoutProntuariosInput, prontuarios_exerciciosUncheckedUpdateWithoutProntuariosInput>
  }

  export type prontuarios_exerciciosUpdateManyWithWhereWithoutProntuariosInput = {
    where: prontuarios_exerciciosScalarWhereInput
    data: XOR<prontuarios_exerciciosUpdateManyMutationInput, prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosInput>
  }

  export type prontuarios_queixasUpsertWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_queixasWhereUniqueInput
    update: XOR<prontuarios_queixasUpdateWithoutProntuariosInput, prontuarios_queixasUncheckedUpdateWithoutProntuariosInput>
    create: XOR<prontuarios_queixasCreateWithoutProntuariosInput, prontuarios_queixasUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_queixasUpdateWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_queixasWhereUniqueInput
    data: XOR<prontuarios_queixasUpdateWithoutProntuariosInput, prontuarios_queixasUncheckedUpdateWithoutProntuariosInput>
  }

  export type prontuarios_queixasUpdateManyWithWhereWithoutProntuariosInput = {
    where: prontuarios_queixasScalarWhereInput
    data: XOR<prontuarios_queixasUpdateManyMutationInput, prontuarios_queixasUncheckedUpdateManyWithoutProntuariosInput>
  }

  export type prontuarios_queixasScalarWhereInput = {
    AND?: prontuarios_queixasScalarWhereInput | prontuarios_queixasScalarWhereInput[]
    OR?: prontuarios_queixasScalarWhereInput[]
    NOT?: prontuarios_queixasScalarWhereInput | prontuarios_queixasScalarWhereInput[]
    id_prontuario_queixa?: IntFilter<"prontuarios_queixas"> | number
    id_prontuario?: IntFilter<"prontuarios_queixas"> | number
    id_queixa?: IntFilter<"prontuarios_queixas"> | number
  }

  export type prontuarios_sinaisUpsertWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_sinaisWhereUniqueInput
    update: XOR<prontuarios_sinaisUpdateWithoutProntuariosInput, prontuarios_sinaisUncheckedUpdateWithoutProntuariosInput>
    create: XOR<prontuarios_sinaisCreateWithoutProntuariosInput, prontuarios_sinaisUncheckedCreateWithoutProntuariosInput>
  }

  export type prontuarios_sinaisUpdateWithWhereUniqueWithoutProntuariosInput = {
    where: prontuarios_sinaisWhereUniqueInput
    data: XOR<prontuarios_sinaisUpdateWithoutProntuariosInput, prontuarios_sinaisUncheckedUpdateWithoutProntuariosInput>
  }

  export type prontuarios_sinaisUpdateManyWithWhereWithoutProntuariosInput = {
    where: prontuarios_sinaisScalarWhereInput
    data: XOR<prontuarios_sinaisUpdateManyMutationInput, prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosInput>
  }

  export type prontuarios_sinaisScalarWhereInput = {
    AND?: prontuarios_sinaisScalarWhereInput | prontuarios_sinaisScalarWhereInput[]
    OR?: prontuarios_sinaisScalarWhereInput[]
    NOT?: prontuarios_sinaisScalarWhereInput | prontuarios_sinaisScalarWhereInput[]
    id_prontuario_sinal?: IntFilter<"prontuarios_sinais"> | number
    id_prontuario?: IntFilter<"prontuarios_sinais"> | number
    id_sinal?: IntFilter<"prontuarios_sinais"> | number
  }

  export type avaliacoesCreateWithoutProntuarios_avaliacoesInput = {
    avaliacao: string
    data_avaliacao: Date | string
  }

  export type avaliacoesUncheckedCreateWithoutProntuarios_avaliacoesInput = {
    id_avaliacao?: number
    avaliacao: string
    data_avaliacao: Date | string
  }

  export type avaliacoesCreateOrConnectWithoutProntuarios_avaliacoesInput = {
    where: avaliacoesWhereUniqueInput
    create: XOR<avaliacoesCreateWithoutProntuarios_avaliacoesInput, avaliacoesUncheckedCreateWithoutProntuarios_avaliacoesInput>
  }

  export type prontuariosCreateWithoutProntuarios_avaliacoesInput = {
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    orientacoes?: orientacoesCreateNestedManyWithoutProntuariosInput
    pacientes: pacientesCreateNestedOneWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUncheckedCreateWithoutProntuarios_avaliacoesInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
    orientacoes?: orientacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosCreateOrConnectWithoutProntuarios_avaliacoesInput = {
    where: prontuariosWhereUniqueInput
    create: XOR<prontuariosCreateWithoutProntuarios_avaliacoesInput, prontuariosUncheckedCreateWithoutProntuarios_avaliacoesInput>
  }

  export type avaliacoesUpsertWithoutProntuarios_avaliacoesInput = {
    update: XOR<avaliacoesUpdateWithoutProntuarios_avaliacoesInput, avaliacoesUncheckedUpdateWithoutProntuarios_avaliacoesInput>
    create: XOR<avaliacoesCreateWithoutProntuarios_avaliacoesInput, avaliacoesUncheckedCreateWithoutProntuarios_avaliacoesInput>
    where?: avaliacoesWhereInput
  }

  export type avaliacoesUpdateToOneWithWhereWithoutProntuarios_avaliacoesInput = {
    where?: avaliacoesWhereInput
    data: XOR<avaliacoesUpdateWithoutProntuarios_avaliacoesInput, avaliacoesUncheckedUpdateWithoutProntuarios_avaliacoesInput>
  }

  export type avaliacoesUpdateWithoutProntuarios_avaliacoesInput = {
    avaliacao?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type avaliacoesUncheckedUpdateWithoutProntuarios_avaliacoesInput = {
    id_avaliacao?: IntFieldUpdateOperationsInput | number
    avaliacao?: StringFieldUpdateOperationsInput | string
    data_avaliacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prontuariosUpsertWithoutProntuarios_avaliacoesInput = {
    update: XOR<prontuariosUpdateWithoutProntuarios_avaliacoesInput, prontuariosUncheckedUpdateWithoutProntuarios_avaliacoesInput>
    create: XOR<prontuariosCreateWithoutProntuarios_avaliacoesInput, prontuariosUncheckedCreateWithoutProntuarios_avaliacoesInput>
    where?: prontuariosWhereInput
  }

  export type prontuariosUpdateToOneWithWhereWithoutProntuarios_avaliacoesInput = {
    where?: prontuariosWhereInput
    data: XOR<prontuariosUpdateWithoutProntuarios_avaliacoesInput, prontuariosUncheckedUpdateWithoutProntuarios_avaliacoesInput>
  }

  export type prontuariosUpdateWithoutProntuarios_avaliacoesInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    orientacoes?: orientacoesUpdateManyWithoutProntuariosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateWithoutProntuarios_avaliacoesInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    id_paciente?: IntFieldUpdateOperationsInput | number
    orientacoes?: orientacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosNestedInput
  }

  export type exerciciosCreateWithoutProntuarios_exerciciosInput = {
    titulo: string
    descricao: string
    orientacoes: string
    exericios_tags?: exericios_tagsCreateNestedManyWithoutExerciciosInput
    imagens_exercicios?: imagens_exerciciosCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosUncheckedCreateWithoutProntuarios_exerciciosInput = {
    id_exercicio?: number
    titulo: string
    descricao: string
    orientacoes: string
    exericios_tags?: exericios_tagsUncheckedCreateNestedManyWithoutExerciciosInput
    imagens_exercicios?: imagens_exerciciosUncheckedCreateNestedManyWithoutExerciciosInput
  }

  export type exerciciosCreateOrConnectWithoutProntuarios_exerciciosInput = {
    where: exerciciosWhereUniqueInput
    create: XOR<exerciciosCreateWithoutProntuarios_exerciciosInput, exerciciosUncheckedCreateWithoutProntuarios_exerciciosInput>
  }

  export type prontuariosCreateWithoutProntuarios_exerciciosInput = {
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    orientacoes?: orientacoesCreateNestedManyWithoutProntuariosInput
    pacientes: pacientesCreateNestedOneWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUncheckedCreateWithoutProntuarios_exerciciosInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
    orientacoes?: orientacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosCreateOrConnectWithoutProntuarios_exerciciosInput = {
    where: prontuariosWhereUniqueInput
    create: XOR<prontuariosCreateWithoutProntuarios_exerciciosInput, prontuariosUncheckedCreateWithoutProntuarios_exerciciosInput>
  }

  export type exerciciosUpsertWithoutProntuarios_exerciciosInput = {
    update: XOR<exerciciosUpdateWithoutProntuarios_exerciciosInput, exerciciosUncheckedUpdateWithoutProntuarios_exerciciosInput>
    create: XOR<exerciciosCreateWithoutProntuarios_exerciciosInput, exerciciosUncheckedCreateWithoutProntuarios_exerciciosInput>
    where?: exerciciosWhereInput
  }

  export type exerciciosUpdateToOneWithWhereWithoutProntuarios_exerciciosInput = {
    where?: exerciciosWhereInput
    data: XOR<exerciciosUpdateWithoutProntuarios_exerciciosInput, exerciciosUncheckedUpdateWithoutProntuarios_exerciciosInput>
  }

  export type exerciciosUpdateWithoutProntuarios_exerciciosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUpdateManyWithoutExerciciosNestedInput
    imagens_exercicios?: imagens_exerciciosUpdateManyWithoutExerciciosNestedInput
  }

  export type exerciciosUncheckedUpdateWithoutProntuarios_exerciciosInput = {
    id_exercicio?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    orientacoes?: StringFieldUpdateOperationsInput | string
    exericios_tags?: exericios_tagsUncheckedUpdateManyWithoutExerciciosNestedInput
    imagens_exercicios?: imagens_exerciciosUncheckedUpdateManyWithoutExerciciosNestedInput
  }

  export type prontuariosUpsertWithoutProntuarios_exerciciosInput = {
    update: XOR<prontuariosUpdateWithoutProntuarios_exerciciosInput, prontuariosUncheckedUpdateWithoutProntuarios_exerciciosInput>
    create: XOR<prontuariosCreateWithoutProntuarios_exerciciosInput, prontuariosUncheckedCreateWithoutProntuarios_exerciciosInput>
    where?: prontuariosWhereInput
  }

  export type prontuariosUpdateToOneWithWhereWithoutProntuarios_exerciciosInput = {
    where?: prontuariosWhereInput
    data: XOR<prontuariosUpdateWithoutProntuarios_exerciciosInput, prontuariosUncheckedUpdateWithoutProntuarios_exerciciosInput>
  }

  export type prontuariosUpdateWithoutProntuarios_exerciciosInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    orientacoes?: orientacoesUpdateManyWithoutProntuariosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateWithoutProntuarios_exerciciosInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    id_paciente?: IntFieldUpdateOperationsInput | number
    orientacoes?: orientacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosCreateWithoutProntuarios_queixasInput = {
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    orientacoes?: orientacoesCreateNestedManyWithoutProntuariosInput
    pacientes: pacientesCreateNestedOneWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUncheckedCreateWithoutProntuarios_queixasInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
    orientacoes?: orientacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosCreateOrConnectWithoutProntuarios_queixasInput = {
    where: prontuariosWhereUniqueInput
    create: XOR<prontuariosCreateWithoutProntuarios_queixasInput, prontuariosUncheckedCreateWithoutProntuarios_queixasInput>
  }

  export type queixasCreateWithoutProntuarios_queixasInput = {
    queixa: string
    data_queixa: Date | string
  }

  export type queixasUncheckedCreateWithoutProntuarios_queixasInput = {
    id_queixa?: number
    queixa: string
    data_queixa: Date | string
  }

  export type queixasCreateOrConnectWithoutProntuarios_queixasInput = {
    where: queixasWhereUniqueInput
    create: XOR<queixasCreateWithoutProntuarios_queixasInput, queixasUncheckedCreateWithoutProntuarios_queixasInput>
  }

  export type prontuariosUpsertWithoutProntuarios_queixasInput = {
    update: XOR<prontuariosUpdateWithoutProntuarios_queixasInput, prontuariosUncheckedUpdateWithoutProntuarios_queixasInput>
    create: XOR<prontuariosCreateWithoutProntuarios_queixasInput, prontuariosUncheckedCreateWithoutProntuarios_queixasInput>
    where?: prontuariosWhereInput
  }

  export type prontuariosUpdateToOneWithWhereWithoutProntuarios_queixasInput = {
    where?: prontuariosWhereInput
    data: XOR<prontuariosUpdateWithoutProntuarios_queixasInput, prontuariosUncheckedUpdateWithoutProntuarios_queixasInput>
  }

  export type prontuariosUpdateWithoutProntuarios_queixasInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    orientacoes?: orientacoesUpdateManyWithoutProntuariosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateWithoutProntuarios_queixasInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    id_paciente?: IntFieldUpdateOperationsInput | number
    orientacoes?: orientacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosNestedInput
  }

  export type queixasUpsertWithoutProntuarios_queixasInput = {
    update: XOR<queixasUpdateWithoutProntuarios_queixasInput, queixasUncheckedUpdateWithoutProntuarios_queixasInput>
    create: XOR<queixasCreateWithoutProntuarios_queixasInput, queixasUncheckedCreateWithoutProntuarios_queixasInput>
    where?: queixasWhereInput
  }

  export type queixasUpdateToOneWithWhereWithoutProntuarios_queixasInput = {
    where?: queixasWhereInput
    data: XOR<queixasUpdateWithoutProntuarios_queixasInput, queixasUncheckedUpdateWithoutProntuarios_queixasInput>
  }

  export type queixasUpdateWithoutProntuarios_queixasInput = {
    queixa?: StringFieldUpdateOperationsInput | string
    data_queixa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type queixasUncheckedUpdateWithoutProntuarios_queixasInput = {
    id_queixa?: IntFieldUpdateOperationsInput | number
    queixa?: StringFieldUpdateOperationsInput | string
    data_queixa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prontuariosCreateWithoutProntuarios_sinaisInput = {
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    orientacoes?: orientacoesCreateNestedManyWithoutProntuariosInput
    pacientes: pacientesCreateNestedOneWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosUncheckedCreateWithoutProntuarios_sinaisInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
    id_paciente: number
    orientacoes?: orientacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedCreateNestedManyWithoutProntuariosInput
    prontuarios_queixas?: prontuarios_queixasUncheckedCreateNestedManyWithoutProntuariosInput
  }

  export type prontuariosCreateOrConnectWithoutProntuarios_sinaisInput = {
    where: prontuariosWhereUniqueInput
    create: XOR<prontuariosCreateWithoutProntuarios_sinaisInput, prontuariosUncheckedCreateWithoutProntuarios_sinaisInput>
  }

  export type sinaisCreateWithoutProntuarios_sinaisInput = {
    sinal: string
    escala: number
  }

  export type sinaisUncheckedCreateWithoutProntuarios_sinaisInput = {
    id_sinal?: number
    sinal: string
    escala: number
  }

  export type sinaisCreateOrConnectWithoutProntuarios_sinaisInput = {
    where: sinaisWhereUniqueInput
    create: XOR<sinaisCreateWithoutProntuarios_sinaisInput, sinaisUncheckedCreateWithoutProntuarios_sinaisInput>
  }

  export type prontuariosUpsertWithoutProntuarios_sinaisInput = {
    update: XOR<prontuariosUpdateWithoutProntuarios_sinaisInput, prontuariosUncheckedUpdateWithoutProntuarios_sinaisInput>
    create: XOR<prontuariosCreateWithoutProntuarios_sinaisInput, prontuariosUncheckedCreateWithoutProntuarios_sinaisInput>
    where?: prontuariosWhereInput
  }

  export type prontuariosUpdateToOneWithWhereWithoutProntuarios_sinaisInput = {
    where?: prontuariosWhereInput
    data: XOR<prontuariosUpdateWithoutProntuarios_sinaisInput, prontuariosUncheckedUpdateWithoutProntuarios_sinaisInput>
  }

  export type prontuariosUpdateWithoutProntuarios_sinaisInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    orientacoes?: orientacoesUpdateManyWithoutProntuariosNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateWithoutProntuarios_sinaisInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    id_paciente?: IntFieldUpdateOperationsInput | number
    orientacoes?: orientacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUncheckedUpdateManyWithoutProntuariosNestedInput
  }

  export type sinaisUpsertWithoutProntuarios_sinaisInput = {
    update: XOR<sinaisUpdateWithoutProntuarios_sinaisInput, sinaisUncheckedUpdateWithoutProntuarios_sinaisInput>
    create: XOR<sinaisCreateWithoutProntuarios_sinaisInput, sinaisUncheckedCreateWithoutProntuarios_sinaisInput>
    where?: sinaisWhereInput
  }

  export type sinaisUpdateToOneWithWhereWithoutProntuarios_sinaisInput = {
    where?: sinaisWhereInput
    data: XOR<sinaisUpdateWithoutProntuarios_sinaisInput, sinaisUncheckedUpdateWithoutProntuarios_sinaisInput>
  }

  export type sinaisUpdateWithoutProntuarios_sinaisInput = {
    sinal?: StringFieldUpdateOperationsInput | string
    escala?: IntFieldUpdateOperationsInput | number
  }

  export type sinaisUncheckedUpdateWithoutProntuarios_sinaisInput = {
    id_sinal?: IntFieldUpdateOperationsInput | number
    sinal?: StringFieldUpdateOperationsInput | string
    escala?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_queixasCreateWithoutQueixasInput = {
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_queixasInput
  }

  export type prontuarios_queixasUncheckedCreateWithoutQueixasInput = {
    id_prontuario_queixa?: number
    id_prontuario: number
  }

  export type prontuarios_queixasCreateOrConnectWithoutQueixasInput = {
    where: prontuarios_queixasWhereUniqueInput
    create: XOR<prontuarios_queixasCreateWithoutQueixasInput, prontuarios_queixasUncheckedCreateWithoutQueixasInput>
  }

  export type prontuarios_queixasCreateManyQueixasInputEnvelope = {
    data: prontuarios_queixasCreateManyQueixasInput | prontuarios_queixasCreateManyQueixasInput[]
    skipDuplicates?: boolean
  }

  export type prontuarios_queixasUpsertWithWhereUniqueWithoutQueixasInput = {
    where: prontuarios_queixasWhereUniqueInput
    update: XOR<prontuarios_queixasUpdateWithoutQueixasInput, prontuarios_queixasUncheckedUpdateWithoutQueixasInput>
    create: XOR<prontuarios_queixasCreateWithoutQueixasInput, prontuarios_queixasUncheckedCreateWithoutQueixasInput>
  }

  export type prontuarios_queixasUpdateWithWhereUniqueWithoutQueixasInput = {
    where: prontuarios_queixasWhereUniqueInput
    data: XOR<prontuarios_queixasUpdateWithoutQueixasInput, prontuarios_queixasUncheckedUpdateWithoutQueixasInput>
  }

  export type prontuarios_queixasUpdateManyWithWhereWithoutQueixasInput = {
    where: prontuarios_queixasScalarWhereInput
    data: XOR<prontuarios_queixasUpdateManyMutationInput, prontuarios_queixasUncheckedUpdateManyWithoutQueixasInput>
  }

  export type prontuarios_sinaisCreateWithoutSinaisInput = {
    prontuarios: prontuariosCreateNestedOneWithoutProntuarios_sinaisInput
  }

  export type prontuarios_sinaisUncheckedCreateWithoutSinaisInput = {
    id_prontuario_sinal?: number
    id_prontuario: number
  }

  export type prontuarios_sinaisCreateOrConnectWithoutSinaisInput = {
    where: prontuarios_sinaisWhereUniqueInput
    create: XOR<prontuarios_sinaisCreateWithoutSinaisInput, prontuarios_sinaisUncheckedCreateWithoutSinaisInput>
  }

  export type prontuarios_sinaisCreateManySinaisInputEnvelope = {
    data: prontuarios_sinaisCreateManySinaisInput | prontuarios_sinaisCreateManySinaisInput[]
    skipDuplicates?: boolean
  }

  export type prontuarios_sinaisUpsertWithWhereUniqueWithoutSinaisInput = {
    where: prontuarios_sinaisWhereUniqueInput
    update: XOR<prontuarios_sinaisUpdateWithoutSinaisInput, prontuarios_sinaisUncheckedUpdateWithoutSinaisInput>
    create: XOR<prontuarios_sinaisCreateWithoutSinaisInput, prontuarios_sinaisUncheckedCreateWithoutSinaisInput>
  }

  export type prontuarios_sinaisUpdateWithWhereUniqueWithoutSinaisInput = {
    where: prontuarios_sinaisWhereUniqueInput
    data: XOR<prontuarios_sinaisUpdateWithoutSinaisInput, prontuarios_sinaisUncheckedUpdateWithoutSinaisInput>
  }

  export type prontuarios_sinaisUpdateManyWithWhereWithoutSinaisInput = {
    where: prontuarios_sinaisScalarWhereInput
    data: XOR<prontuarios_sinaisUpdateManyMutationInput, prontuarios_sinaisUncheckedUpdateManyWithoutSinaisInput>
  }

  export type exericios_tagsCreateWithoutTagsInput = {
    exercicios: exerciciosCreateNestedOneWithoutExericios_tagsInput
  }

  export type exericios_tagsUncheckedCreateWithoutTagsInput = {
    id_exercicio_tag?: number
    id_exercicio: number
  }

  export type exericios_tagsCreateOrConnectWithoutTagsInput = {
    where: exericios_tagsWhereUniqueInput
    create: XOR<exericios_tagsCreateWithoutTagsInput, exericios_tagsUncheckedCreateWithoutTagsInput>
  }

  export type exericios_tagsCreateManyTagsInputEnvelope = {
    data: exericios_tagsCreateManyTagsInput | exericios_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type exericios_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: exericios_tagsWhereUniqueInput
    update: XOR<exericios_tagsUpdateWithoutTagsInput, exericios_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<exericios_tagsCreateWithoutTagsInput, exericios_tagsUncheckedCreateWithoutTagsInput>
  }

  export type exericios_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: exericios_tagsWhereUniqueInput
    data: XOR<exericios_tagsUpdateWithoutTagsInput, exericios_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type exericios_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: exericios_tagsScalarWhereInput
    data: XOR<exericios_tagsUpdateManyMutationInput, exericios_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type prontuariosCreateManyPacientesInput = {
    id_prontuario?: number
    data_inicio_tratamento: Date | string
    classificacao: $Enums.classificacao_usuario
  }

  export type prontuariosUpdateWithoutPacientesInput = {
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    orientacoes?: orientacoesUpdateManyWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateWithoutPacientesInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
    orientacoes?: orientacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_avaliacoes?: prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_exercicios?: prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_queixas?: prontuarios_queixasUncheckedUpdateManyWithoutProntuariosNestedInput
    prontuarios_sinais?: prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosNestedInput
  }

  export type prontuariosUncheckedUpdateManyWithoutPacientesInput = {
    id_prontuario?: IntFieldUpdateOperationsInput | number
    data_inicio_tratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    classificacao?: Enumclassificacao_usuarioFieldUpdateOperationsInput | $Enums.classificacao_usuario
  }

  export type prontuarios_avaliacoesCreateManyAvaliacoesInput = {
    id_prontuario_avaliacao?: number
    id_prontuario: number
  }

  export type prontuarios_avaliacoesUpdateWithoutAvaliacoesInput = {
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_avaliacoesNestedInput
  }

  export type prontuarios_avaliacoesUncheckedUpdateWithoutAvaliacoesInput = {
    id_prontuario_avaliacao?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_avaliacoesUncheckedUpdateManyWithoutAvaliacoesInput = {
    id_prontuario_avaliacao?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type exericios_tagsCreateManyExerciciosInput = {
    id_exercicio_tag?: number
    id_tag: number
  }

  export type imagens_exerciciosCreateManyExerciciosInput = {
    id_imagem?: number
    link_imagem: string
  }

  export type prontuarios_exerciciosCreateManyExerciciosInput = {
    id_prontuario_exercicio?: number
    id_prontuario: number
  }

  export type exericios_tagsUpdateWithoutExerciciosInput = {
    tags?: tagsUpdateOneRequiredWithoutExericios_tagsNestedInput
  }

  export type exericios_tagsUncheckedUpdateWithoutExerciciosInput = {
    id_exercicio_tag?: IntFieldUpdateOperationsInput | number
    id_tag?: IntFieldUpdateOperationsInput | number
  }

  export type exericios_tagsUncheckedUpdateManyWithoutExerciciosInput = {
    id_exercicio_tag?: IntFieldUpdateOperationsInput | number
    id_tag?: IntFieldUpdateOperationsInput | number
  }

  export type imagens_exerciciosUpdateWithoutExerciciosInput = {
    link_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type imagens_exerciciosUncheckedUpdateWithoutExerciciosInput = {
    id_imagem?: IntFieldUpdateOperationsInput | number
    link_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type imagens_exerciciosUncheckedUpdateManyWithoutExerciciosInput = {
    id_imagem?: IntFieldUpdateOperationsInput | number
    link_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type prontuarios_exerciciosUpdateWithoutExerciciosInput = {
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_exerciciosNestedInput
  }

  export type prontuarios_exerciciosUncheckedUpdateWithoutExerciciosInput = {
    id_prontuario_exercicio?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_exerciciosUncheckedUpdateManyWithoutExerciciosInput = {
    id_prontuario_exercicio?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type orientacoesCreateManyProntuariosInput = {
    id_orientacao?: number
    orientacao: string
    data_orientacao: Date | string
  }

  export type prontuarios_avaliacoesCreateManyProntuariosInput = {
    id_prontuario_avaliacao?: number
    id_avaliacao: number
  }

  export type prontuarios_exerciciosCreateManyProntuariosInput = {
    id_prontuario_exercicio?: number
    id_exercicio: number
  }

  export type prontuarios_queixasCreateManyProntuariosInput = {
    id_prontuario_queixa?: number
    id_queixa: number
  }

  export type prontuarios_sinaisCreateManyProntuariosInput = {
    id_prontuario_sinal?: number
    id_sinal: number
  }

  export type orientacoesUpdateWithoutProntuariosInput = {
    orientacao?: StringFieldUpdateOperationsInput | string
    data_orientacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orientacoesUncheckedUpdateWithoutProntuariosInput = {
    id_orientacao?: IntFieldUpdateOperationsInput | number
    orientacao?: StringFieldUpdateOperationsInput | string
    data_orientacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orientacoesUncheckedUpdateManyWithoutProntuariosInput = {
    id_orientacao?: IntFieldUpdateOperationsInput | number
    orientacao?: StringFieldUpdateOperationsInput | string
    data_orientacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prontuarios_avaliacoesUpdateWithoutProntuariosInput = {
    avaliacoes?: avaliacoesUpdateOneRequiredWithoutProntuarios_avaliacoesNestedInput
  }

  export type prontuarios_avaliacoesUncheckedUpdateWithoutProntuariosInput = {
    id_prontuario_avaliacao?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_avaliacoesUncheckedUpdateManyWithoutProntuariosInput = {
    id_prontuario_avaliacao?: IntFieldUpdateOperationsInput | number
    id_avaliacao?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_exerciciosUpdateWithoutProntuariosInput = {
    exercicios?: exerciciosUpdateOneRequiredWithoutProntuarios_exerciciosNestedInput
  }

  export type prontuarios_exerciciosUncheckedUpdateWithoutProntuariosInput = {
    id_prontuario_exercicio?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_exerciciosUncheckedUpdateManyWithoutProntuariosInput = {
    id_prontuario_exercicio?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_queixasUpdateWithoutProntuariosInput = {
    queixas?: queixasUpdateOneRequiredWithoutProntuarios_queixasNestedInput
  }

  export type prontuarios_queixasUncheckedUpdateWithoutProntuariosInput = {
    id_prontuario_queixa?: IntFieldUpdateOperationsInput | number
    id_queixa?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_queixasUncheckedUpdateManyWithoutProntuariosInput = {
    id_prontuario_queixa?: IntFieldUpdateOperationsInput | number
    id_queixa?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_sinaisUpdateWithoutProntuariosInput = {
    sinais?: sinaisUpdateOneRequiredWithoutProntuarios_sinaisNestedInput
  }

  export type prontuarios_sinaisUncheckedUpdateWithoutProntuariosInput = {
    id_prontuario_sinal?: IntFieldUpdateOperationsInput | number
    id_sinal?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_sinaisUncheckedUpdateManyWithoutProntuariosInput = {
    id_prontuario_sinal?: IntFieldUpdateOperationsInput | number
    id_sinal?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_queixasCreateManyQueixasInput = {
    id_prontuario_queixa?: number
    id_prontuario: number
  }

  export type prontuarios_queixasUpdateWithoutQueixasInput = {
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_queixasNestedInput
  }

  export type prontuarios_queixasUncheckedUpdateWithoutQueixasInput = {
    id_prontuario_queixa?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_queixasUncheckedUpdateManyWithoutQueixasInput = {
    id_prontuario_queixa?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_sinaisCreateManySinaisInput = {
    id_prontuario_sinal?: number
    id_prontuario: number
  }

  export type prontuarios_sinaisUpdateWithoutSinaisInput = {
    prontuarios?: prontuariosUpdateOneRequiredWithoutProntuarios_sinaisNestedInput
  }

  export type prontuarios_sinaisUncheckedUpdateWithoutSinaisInput = {
    id_prontuario_sinal?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type prontuarios_sinaisUncheckedUpdateManyWithoutSinaisInput = {
    id_prontuario_sinal?: IntFieldUpdateOperationsInput | number
    id_prontuario?: IntFieldUpdateOperationsInput | number
  }

  export type exericios_tagsCreateManyTagsInput = {
    id_exercicio_tag?: number
    id_exercicio: number
  }

  export type exericios_tagsUpdateWithoutTagsInput = {
    exercicios?: exerciciosUpdateOneRequiredWithoutExericios_tagsNestedInput
  }

  export type exericios_tagsUncheckedUpdateWithoutTagsInput = {
    id_exercicio_tag?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }

  export type exericios_tagsUncheckedUpdateManyWithoutTagsInput = {
    id_exercicio_tag?: IntFieldUpdateOperationsInput | number
    id_exercicio?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}