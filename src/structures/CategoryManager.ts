import PostManager from './PostManager'
import categoryModel from '../providers/schemas/categoryModel'

class CategoryManager extends PostManager {
    constructor() {
        super();
    }

    async getCategoryByName(object: { name: String}) {
        if(typeof object !== "object") throw new Error("categoryManager.getCategoryByName() - This method type must be an object");
        
        return await categoryModel.findOne({ 'name': object.name});
    }
    async addCategory(document: categoryInterface) {
        if(typeof document !== "object") throw new Error("categoryManager.addCategory() - This method type must be an object");

        await new categoryModel({
            name: document.name,
            description: document.description,
            posts: []
        }).save()
    }
    updateCategory() {}
    deleteCategory() {}
}


export default CategoryManager;

interface categoryInterface {
    name: String,
    description: String
}