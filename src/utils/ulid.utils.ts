import { monotonicFactory } from 'ulid';

const id = await monotonicFactory();

export const generateID = () => {
	return id();
};
