// import {
//   ArgumentMetadata,
//   BadRequestException,
//   Injectable,
//   PipeTransform,
// } from '@nestjs/common';

// @Injectable()
// export class ValidationObjectIdPipe implements PipeTransform {
//   transform(value: any, metadata: ArgumentMetadata) {
//     if (!mongoose.Types.ObjectId.isValid(value)) {
//       throw new BadRequestException(`Provide a valid ${metadata.data}`);
//     }

//     return value;
//   }
// }
