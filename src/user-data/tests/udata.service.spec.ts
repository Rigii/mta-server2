import { Test } from '@nestjs/testing';
import { UDataController } from '../udata.controller';
import { UDataService } from '../udata.service';
import { udataProviders } from '../udata.providers';
import { DatabaseModule } from '../../database/database.module';

describe('UDataController', () => {

    let uDataController: UDataController;
    let uDataService: UDataService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [DatabaseModule],
            controllers: [UDataController],
            providers: [UDataService, ...udataProviders],
          }).compile();
    
          uDataService = module.get<UDataService>(UDataService);
          uDataController = module.get<UDataController>(UDataController);
      });
  
    describe('getAllEdata', () => {
      it('should return an array of cats', async () => {
        const result = [];
        jest.spyOn(uDataService, 'getAllEdata').mockImplementation(() => Promise.resolve(result)) ;
  
        expect(await uDataController.getAllEdata()).toBe(result);
      });
    });

    describe('getEdata', () => {
      const mockDataEmail = 'mario'
      it('should return an array of cats', async () => {
        const result = [];
        jest.spyOn(uDataService, 'getEdata').mockImplementation(() => Promise.resolve(result)) ;
        expect(await uDataController.getEdata(mockDataEmail)).toBe(result);
      });
    });

    describe('addUser', () => {
      const mockData = {"email": "mario", "data": []}
      it('should return an array of cats', async () => {
        jest.spyOn(uDataService, 'addUser').mockImplementation();
        expect(await uDataController.create(mockData));
        expect(uDataService.addUser).toHaveBeenCalled()
      });
    });

    describe('addUserItem', () => {
      const mockDataEmail = 'mario'
      it('should return an array of cats', async () => {
        jest.spyOn(uDataService, 'addUserItem').mockImplementation();
        expect(await uDataController.addItem([], mockDataEmail));
        expect(uDataService.addUserItem).toHaveBeenCalled()
      });
    });

    describe('deleteItem', () => {
      const mockDataEmail = 'mario'
      it('should return an array of cats', async () => {
        jest.spyOn(uDataService, 'deleteItem').mockImplementation();
        expect(await uDataController.deleteItem({id: '123'}, mockDataEmail));
        expect(uDataService.deleteItem).toHaveBeenCalled()
      });
    });

  });