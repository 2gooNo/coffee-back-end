export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  _id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type InputPrice = {
  large?: InputMaybe<Scalars['String']['input']>;
  medium?: InputMaybe<Scalars['String']['input']>;
  small?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory?: Maybe<Array<Category>>;
  addProduct?: Maybe<Array<Product>>;
  addUser?: Maybe<User>;
};


export type MutationAddCategoryArgs = {
  input?: InputMaybe<AddCategoryInput>;
};


export type MutationAddProductArgs = {
  input?: InputMaybe<AddProductInput>;
};


export type MutationAddUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type Price = {
  __typename?: 'Price';
  large?: Maybe<Scalars['Int']['output']>;
  medium?: Maybe<Scalars['Int']['output']>;
  small?: Maybe<Scalars['Int']['output']>;
};

export type Product = {
  __typename?: 'Product';
  categoryId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imageURL?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Price>;
};

export type Query = {
  __typename?: 'Query';
  getAllCategory?: Maybe<Array<Category>>;
  getAllProduct?: Maybe<Array<Product>>;
  getAllUser?: Maybe<Array<User>>;
  getOneUser?: Maybe<Scalars['String']['output']>;
};


export type QueryGetOneUserArgs = {
  input?: InputMaybe<GetOneUserInput>;
};

export type User = {
  __typename?: 'User';
  adress?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  favotites?: Maybe<Array<Scalars['String']['output']>>;
  fullName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type AddCategoryInput = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
};

export type AddProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageURL?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<InputPrice>;
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type GetOneUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


