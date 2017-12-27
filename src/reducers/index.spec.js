import reducer from './index';
import * as types from '../constants/actionTypes';
import * as wormActions from '../actions/wormActions'

describe('reducers', () => {
  describe('counter', () => {
    it('should ignore unknown actions', () => {
      expect(reducer(1, { type: 'unknown' })).toBe(1);
    });
  });

  describe('initialize worm', () => {
    it('should set the worm position', () => {
      const state = reducer({}, wormActions.initWorm());
      expect(state.worm.points[1].x).toBe(4);
      expect(state.worm.points[1].y).toBe(3);
      expect(state.worm.next.x).toBe(6);
      expect(state.worm.next.y).toBe(3);
    });
  });

  describe('initialize bite', () => {
    it('should set the bite position', () => {
      const state = reducer({}, wormActions.initBite());
      expect(state.bite.point.x).toBe(10);
      expect(state.bite.point.y).toBe(10);
    });
  });
});
