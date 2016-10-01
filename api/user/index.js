'use strict';

var express = require('express');
var controller = require('./user.controller');
var auth = require('../auth/auth.service');

var router = express.Router();

/**
 * @api {GET} /api/user/all get all users
 * @apiName GetAllUser
 * @apiGroup User
 *
 * @apiSuccess {String} account account of the User.
 * @apiSuccess {String} password pasword of the User.
 * @apiSuccess {String} Name name of the User.

 * @apiSuccessExample {json} Success-Response:
 *     [{
 *       "account": "admin",
 *       "pasword": "123456",
 *       "name": "Thanh Cuong"
 *     }]
 */
router.get('/all', auth.hasRole('user'), controller.findAll);

router.post('/', controller.addUser);

/**
 * @api {GET} /api/user/:account get user by account
 * @apiName GetUserByAccount
 * @apiGroup User
 *
 * @apiParam {String} account Users Account.
 *
 * @apiSuccess {String} account account of the User.
 * @apiSuccess {String} password pasword of the User.
 * @apiSuccess {String} Name name of the User.

 * @apiSuccessExample {json} Success-Response:
 *     {
 *       "account": "admin",
 *       "pasword": "123456",
 *       "name": "Thanh Cuong"
 *     }
 */
router.get('/account/:account', controller.findByAccount);
router.get('/name/:name', controller.findByName);
router.get('/find', controller.find);
router.put('/edit',controller.edit);
router.delete('/delete/:username',controller.deleteUser);

module.exports = router;
