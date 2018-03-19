/**
 * Install the MySQL table
 * @module index
 * @author Basile Pesin
 */

import Enrollment from './DB/Enrollment'
import Group from './DB/Group'
import Role from './DB/Role'
import Slot from './DB/Slot'
import SlotType from './DB/SlotType'
import UE from './DB/UE'
import User from './DB/User'

Role.sync()
User.sync()
UE.sync()
Group.sync()
SlotType.sync()
Slot.sync()
Enrollment.sync()
